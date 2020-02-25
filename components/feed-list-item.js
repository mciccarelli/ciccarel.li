import { isBefore } from 'date-fns';
import { relativeTime } from '../lib/utils';
import { TWITTER_SCREEN_NAME } from '../lib/constants';

// TODO: clean this rendering logic up, into separate sources
const FeedListItem = ({
  type,
  id_str,
  date,
  client,
  isComingSoon,
  content,
  title,
  text,
  location,
  url,
  like,
  retweet,
  entities,
  user,
  eventType,
  repo,
  payload,
  actor,
}) => {
  //=> false

  switch (type) {
    case 'project':
      if (isComingSoon || !isBefore(new Date(date), new Date())) return <></>;
      return (
        <div className="activity-item api">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>
          <div className="activity-item__content">
            Released{' '}
            <a href={url} title={`Visit ${url.replace(/(^\w+:|^)\/\//, '')}`}>
              a new project
            </a>{' '}
            for {client}.
          </div>
        </div>
      );
    case 'update':
      return (
        <div className="activity-item api">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>{' '}
          <div
            className="activity-item__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      );
    case 'instagram':
      return (
        <div className="activity-item instagram">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>
          <div className="activity-item__content">
            Posted <a href={url}>a photo</a>{' '}
            {location ? `from ${location}` : 'on Instagram'}.
          </div>
        </div>
      );
    case 'twitter':
      return (
        <div className="activity-item twitter">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>{' '}
          {like && (
            <div className="activity-item__content">
              Liked{' '}
              <a
                href={`https://twitter.com/${user.screen_name}/status/${id_str}`}
              >
                a tweet
              </a>{' '}
              by{' '}
              {user && user.screen_name && (
                <a href={`https://twitter.com/${user.screen_name}`}>
                  @{user.screen_name}
                </a>
              )}{' '}
              on Twitter.
            </div>
          )}
          {retweet && (
            <div className="activity-item__content">
              Retweeted{' '}
              <a
                href={`https://twitter.com/${TWITTER_SCREEN_NAME}/status/${id_str}`}
              >
                something
              </a>{' '}
              on Twitter.
            </div>
          )}
          {!retweet && !like && (
            <div className="activity-item__content">
              Posted{' '}
              <a
                href={`https://twitter.com/${TWITTER_SCREEN_NAME}/status/${id_str}`}
              >
                a tweet
              </a>{' '}
              on Twitter.
            </div>
          )}
        </div>
      );
    case 'github':
      return (
        <div className="activity-item github">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>{' '}
          {eventType === 'PushEvent' && (
            <div className="activity-item__content">
              Pushed{' '}
              <a
                href={`https://github.com/${repo.name}/commit/${payload.head}`}
              >
                some code
              </a>{' '}
              to a <a href={`https://github.com/${repo.name}`}>public repo</a>{' '}
              on Github.
            </div>
          )}
          {/* {eventType === 'StarEvent' && (
            <>
              Starred <a href="">a repo</a> on <a href="#">Github</a>
            </>
          )} */}
        </div>
      );
  }
};

export default FeedListItem;
