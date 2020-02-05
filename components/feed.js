import { useState, useEffect, useRef } from 'react';
import { FeedListItem } from './';
import { sleep } from '../lib/utils';
import smoothscroll from 'smoothscroll-polyfill';
import cx from 'classnames';

const DEFAULT_COUNT = 8;

const Feed = ({ items }) => {
  const [loading, setLoading] = useState(false);
  const [count, increment] = useState(DEFAULT_COUNT);
  const [listItems, setListItems] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    smoothscroll.polyfill();
    if (items && items.length) {
      setListItems(items.slice(0, count));
    }
  }, [count]);

  // NOTE: faking the load more logic here on client,
  // need to add pagination to activity api endpoint
  const handleLoadMore = async e => {
    e.preventDefault();
    setLoading(true);
    await sleep(500);
    const diff = items.length - count;
    if (diff >= 8) {
      increment(count + 8);
    } else if (diff > 0) {
      increment(count + diff);
    }

    setLoading(false);

    await sleep(100);
    window.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="feed max-w-4xl px-6 md:px-12">
      <h2 className="font-body font-bold uppercase text-lg mb-4">
        Recent Activity
        <br /> —
      </h2>
      <ul className="legend">
        <li className="api">API</li>
        <li
          className={cx('instagram', {
            'opacity-25':
              items.filter(item => item.feedSource === 'instagram').length < 1,
          })}
        >
          Instagram
        </li>
        <li
          className={cx('twitter', {
            'opacity-25':
              items.filter(item => item.feedSource === 'twitter').length < 1,
          })}
        >
          Twitter
        </li>
        <li
          className={cx('github', {
            'opacity-25':
              items.filter(item => item.feedSource === 'github').length < 1,
          })}
        >
          Github
        </li>
      </ul>
      <ul ref={listRef} className="activity">
        {listItems.map((item, idx) => (
          <FeedListItem key={idx} {...item} />
        ))}
      </ul>
      <div className="flex items-center">
        <div className="mr-4">
          {loading ? (
            <p
              className="font-mono text-xs text-white flex items-center justify-center my-8"
              style={{ height: 40 }}
            >
              LOADING...
            </p>
          ) : (
            <button
              className="text-xs h-10 w-32 px-4 my-8"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
        <span className="font-mono text-grey-dark text-xs">
          {count}/{items.length}
        </span>
      </div>

      <style jsx global>{`
        .feed {
          @apply .flex .flex-col .w-full;
        }

        .legend {
          @apply .hidden;
        }
        .activity-item {
          @apply .mb-4 .leading-loose .text-xs .font-mono .text-gray-400 .flex .flex-col .items-start;
        }
        .activity-item__date {
          @apply .mr-2 .font-mono .text-gray-600 .text-xs;
        }

        .activity-item a:not(:hover) {
          @apply .text-white;
        }

        @screen md {
          .legend {
            @apply .flex .flex-row .mb-6;
          }
          .legend li {
            @apply .flex .items-center .font-mono .text-xs .text-gray-200 .leading-none .mr-6;
          }
          .legend li:before {
            @apply .mr-4;
            content: '';
            width: 0.75em;
            height: 0.75em;
            border-radius: 50%;
            transform: translateY(-1px);
          }
          .activity-item {
            @apply .mb-2 .leading-normal .flex-row .items-center;
          }
          .activity-item:before {
            @apply .mr-4;
            content: '';
            width: 0.75em;
            height: 0.75em;
            border-radius: 50%;
            transform: translateY(-1px);
          }
          .api:before {
            @apply .bg-orange;
          }
          .instagram:before {
            @apply .bg-instagram;
          }
          .twitter:before {
            @apply .bg-twitter;
          }
          .github:before {
            @apply .bg-github;
          }
        }
      `}</style>
    </div>
  );
};

export default Feed;
