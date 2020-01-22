import { useState, useEffect, useRef } from 'react';
import { FeedListItem } from './';
import { sleep } from '../lib/utils';

const DEFAULT_COUNT = 8;

const Feed = ({ items }) => {
  const [loading, setLoading] = useState(false);
  const [count, increment] = useState(DEFAULT_COUNT);
  const [listItems, setListItems] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    if (items && items.length) {
      setListItems(items.slice(0, count));
    }
  }, [count]);

  // NOTE: faking the load more logic here on client,
  // need to add pagination to activity api endpoint
  const handleLoadMore = async () => {
    setLoading(true);
    await sleep(500);
    const diff = items.length - count;
    if (diff >= 8) {
      increment(count + 8);
    } else if (diff > 0) {
      increment(count + diff);
    }

    setLoading(false);

    await sleep(200);
    window.scrollTo({
      top: listRef.current.scrollHeight + listRef.current.clientHeight,
      behavior: 'smooth',
      block: 'end',
    });
  };

  return (
    <div className="flex flex-col mb-16 container">
      <h2 className="mb-8">
        - Activity Feed{' '}
        <span className="text-grey-dark">
          ({count}/{items.length})
        </span>
      </h2>
      <ul className="legend">
        <li className="api">API</li>
        <li className="instagram">Instagram</li>
        <li className="twitter">Twitter</li>
        <li className="github">Github</li>
      </ul>
      <ul ref={listRef} className="activity">
        {listItems.map((item, idx) => (
          <FeedListItem key={idx} {...item} />
        ))}
        {loading ? (
          <p className="text-xs text-grey-dark my-8">LOADING...</p>
        ) : (
          <button
            className="bg-transparent text-purple-light font-bold py-2 px-4 border border-purple-light rounded my-8"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </ul>
      <style jsx global>{`
        .legend {
          @apply .flex .flex-col .mb-4;
        }
        .legend li {
          @apply .flex .items-center .text-sm .mb-2;
        }
        .legend li:before {
          @apply .mr-3 .shadow;
          content: '';
          width: 0.75em;
          height: 0.75em;
          border-radius: 50%;
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
        .activity-item {
          @apply .mb-6 .leading-loose .text-sm;
        }
        .activity-item:before {
          @apply .mr-4 .shadow .inline-flex;
          content: '';
          width: 0.75em;
          height: 0.75em;
          border-radius: 50%;
        }
        .activity-item span {
          @apply .mr-2;
        }

        @screen md {
          .legend {
            @apply .flex-row .mb-4;
          }
          .legend li {
            @apply .mb-0 mr-4;
          }
          .activity-item {
            @apply .mb-2 .leading-normal;
          }
        }
      `}</style>
    </div>
  );
};

export default Feed;
