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
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>
          <div className="activity-item__content">
            Released{' '}
            <a href={url} title={`Visit ${url.replace(/(^\w+:|^)\/\//, '')}`}>
              a new project
            </a>{' '}
            for {client}.
          </div>
        </li>
      );
    case 'update':
      return (
        <li className="activity-item api">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>{' '}
          <div
            className="activity-item__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </li>
      );
    case 'instagram':
      return (
        <li className="activity-item instagram">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>
          <div className="activity-item__content">
            Posted <a href={url}>a photo</a>{' '}
            {location ? `from ${location}` : 'on Instagram'}.
          </div>
        </li>
      );
    case 'twitter':
      return (
        <li className="activity-item twitter">
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
        </li>
      );
    case 'github':
      return (
        <li className="activity-item github">
          <div className="activity-item__date">{`${relativeTime(date)}`}</div>{' '}
          {type === 'PushEvent' && (
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
