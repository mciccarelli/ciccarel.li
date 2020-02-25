import fetch from 'isomorphic-unfetch';
import {
  TWITTER_TOKEN_API_URL,
  TWITTER_TIMELINE_API_URL,
  TWITTER_LIKES_API_URL,
  TWITTER_SCREEN_NAME,
} from '../../../lib/constants';

const btoaImplementation = str => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString('base64');
  }
};

const getToken = async () => {
  const credentials = `${process.env.TWITTER_CLIENT_USERNAME}:${process.env.TWITTER_CLIENT_PASSWORD}`;
  const token = await fetch(TWITTER_TOKEN_API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoaImplementation(credentials),
    },
  });

  return await token.json();
};

const getTimeline = async token => {
  const timeline = await fetch(TWITTER_TIMELINE_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return await timeline.json();
};

const getLikes = async token => {
  const likes = await fetch(TWITTER_LIKES_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return await likes.json();
};

export default async (req, res) => {
  try {
    const { access_token } = await getToken();
    const timeline = await getTimeline(access_token);
    const likes = await getLikes(access_token);

    let tweets = timeline
      .filter(t => t.in_reply_to_screen_name !== TWITTER_SCREEN_NAME)
      .map(({ created_at, text, retweeted_status, entities, ...rest }) => ({
        ...rest,
        text,
        date: created_at,
        retweet: !!retweeted_status,
        entities,
        type: 'twitter',
      }));

    tweets.push(
      ...likes.map(({ created_at, text, entities, ...rest }) => ({
        ...rest,
        text,
        date: created_at,
        like: true,
        entities,
        type: 'twitter',
      }))
    );

    return tweets;
  } catch (e) {
    console.error('error fetching twitter data', e);
    return [];
  }
};
