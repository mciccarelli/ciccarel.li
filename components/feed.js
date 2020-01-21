import { useState, useEffect } from 'react';
import { FeedListItem } from './';
import { sleep } from '../lib/utils';

const Feed = ({ items }) => {
  const [loading, setLoading] = useState(false);
  const [show, increment] = useState(8);
  const [listItems, setListItems] = useState(items.slice(0, 8));

  useEffect(() => {
    setListItems(items.slice(0, show));
  }, [show]);

  const handleLoadMore = async () => {
    setLoading(true);
    await sleep(500);
    const diff = items.length - show;
    if (diff >= 8) {
      increment(show + 8);
    } else if (diff > 0) {
      increment(show + diff);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col mb-16 container">
      <h2 className="mb-8">
        - Activity Feed{' '}
        <span className="text-grey-dark">
          ({show}/{items.length})
        </span>
      </h2>
      <ul className="legend text-sm">
        <li className="api">API</li>
        <li className="instagram">Instagram</li>
        <li className="twitter">Twitter</li>
        <li className="github">Github</li>
      </ul>
      <ul className="activity text-sm">
        {listItems.map((item, idx) => (
          <FeedListItem key={idx} {...item} />
        ))}
        {loading && <p className="text-xs text-grey-dark my-4">LOADING...</p>}
        <button
          className="bg-transparent text-purple-light font-bold py-2 px-4 border border-purple-light rounded my-8"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </ul>
      <style jsx global>{`
        .legend {
          @apply .flex .mb-6;
          opacity: 0.8;
        }
        .legend li {
          @apply .flex .items-center .mr-6;
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
          @apply .mb-2;
        }
        .activity-item span {
          @apply .mr-2;
        }
        .activity-item:before {
          @apply .mr-4 .shadow .inline-flex;
          content: '';
          width: 0.75em;
          height: 0.75em;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Feed;
