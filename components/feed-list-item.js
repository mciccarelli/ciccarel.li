import { relativeTime } from '../lib/utils';
import { TWITTER_SCREEN_NAME } from '../lib/constants';

// TODO: clean this rendering logic up, into separate sources
const FeedListItem = ({
  feedSource,
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
  type,
  repo,
  payload,
  actor,
  ...rest
}) => {
  switch (feedSource) {
    case 'project':
      if (isComingSoon) return <></>;
      return (
        <li className="activity-item api">
          <span className="text-grey-dark">{`${relativeTime(date)}`}</span>{' '}
          Launched <a href={url}>{url.replace(/(^\w+:|^)\/\//, '')}</a> in
          collaboration with {client}.
        </li>
      );
    case 'update':
      return (
        <li className="activity-item api">
          <span className="text-grey-dark">{`${relativeTime(date)}`}</span>{' '}
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </li>
      );
    case 'instagram':
      return (
        <li className="activity-item instagram">
          <span className="text-grey-dark">{`${relativeTime(date)}`}</span>{' '}
          Posted <a href={url}>a photo</a>{' '}
          {location ? `from ${location}` : 'on Instagram'}.
        </li>
      );
    case 'twitter':
      return (
        <li className="activity-item twitter">
          <span className="text-grey-dark">{`${
            date ? relativeTime(date) : 'n/a'
          }`}</span>{' '}
          {like && (
            <>
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
              on{' '}
              <a href={`https://twitter.com/${TWITTER_SCREEN_NAME}`}>Twitter</a>
            </>
          )}
          {retweet && (
            <>
              Retweeted{' '}
              <a
                href={`https://twitter.com/${TWITTER_SCREEN_NAME}/status/${id_str}`}
              >
                something
              </a>{' '}
              on{' '}
              <a href={`https://twitter.com/${TWITTER_SCREEN_NAME}`}>Twitter</a>{' '}
            </>
          )}
          {!retweet && !like && (
            <>
              Posted{' '}
              <a
                href={`https://twitter.com/${TWITTER_SCREEN_NAME}/status/${id_str}`}
              >
                a tweet
              </a>{' '}
              on{' '}
              <a href={`https://twitter.com/${TWITTER_SCREEN_NAME}`}>Twitter</a>
            </>
          )}
        </li>
      );
    case 'github':
      return (
        <li className="activity-item github">
          <span className="text-grey-dark">{`${relativeTime(date)}`}</span>{' '}
          {type === 'PushEvent' && (
            <>
              Pushed{' '}
              <a
                href={`https://github.com/${repo.name}/commit/${payload.head}`}
              >
                some code
              </a>{' '}
              to a <a href={`https://github.com/${repo.name}`}>public repo</a>{' '}
              on Github.
            </>
          )}
          {/* {type === 'StarEvent' && (
            <>
              Starred <a href="">a repo</a> on <a href="#">Github</a>
            </>
          )} */}
        </li>
      );
  }
};

export default FeedListItem;
