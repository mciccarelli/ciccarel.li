import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FeedListItem } from './';
import { sleep } from '../lib/utils';
import smoothscroll from 'smoothscroll-polyfill';
import cx from 'classnames';

const DEFAULT_COUNT = 5;

const Feed = ({ items, isComplete }) => {
  const [loading, setLoading] = useState(false);
  const [count, increment] = useState(DEFAULT_COUNT);
  const [listItems, setListItems] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (isComplete) handleLoadMore();
    if (items && items.length) setListItems(items.slice(0, count));
  }, [count, isComplete]);

  // NOTE: faking the load more logic here on client,
  // need to add pagination to activity api endpoint
  const handleLoadMore = async e => {
    if (e) e.preventDefault();
    if (loading) return;

    setLoading(true);

    await sleep(500);

    const diff = items.length - count;
    if (diff >= DEFAULT_COUNT) {
      increment(count + DEFAULT_COUNT * 2);
    } else if (diff > 0) {
      increment(count + diff);
    }

    setLoading(false);

    await sleep(250);
  };

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const variants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
    hidden: { opacity: 0, y: '-50%' },
  };

  return (
    <div className="feed max-w-4xl mb-12 md:mb-24">
      <h2 className="mb-8">— activity feed</h2>
      <ul className="legend">
        <li className="api">API</li>
        <li
          className={cx('instagram', {
            'opacity-25':
              items.filter(item => item.type === 'instagram').length < 1,
          })}
        >
          Instagram
        </li>
        <li
          className={cx('twitter', {
            'opacity-25':
              items.filter(item => item.type === 'twitter').length < 1,
          })}
        >
          Twitter
        </li>
        <li
          className={cx('github', {
            'opacity-25':
              items.filter(item => item.type === 'github').length < 1,
          })}
        >
          Github
        </li>
      </ul>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={container}
        ref={listRef}
        className="activity"
      >
        {listItems.map((item, idx) => (
          <motion.li
            key={`activity-item-${idx}`}
            custom={listItems.length <= 5 ? idx : (listItems.length + idx) % 10}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <FeedListItem {...item} />
          </motion.li>
        ))}
      </motion.ul>
      <div className="flex items-center">
        <div className="mr-4">
          <button
            className="text-xs h-10 w-32 px-4 my-8"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'LOADING...' : 'Load More'}
          </button>
        </div>
        <span className="font-mono text-gray-600 text-xs">
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
          @apply .text-white opacity-100;
        }

        @screen md {
          .legend {
            @apply .flex .flex-row .mb-4;
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
            @apply .bg-purple;
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
