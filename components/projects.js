import { motion } from 'framer-motion';
import { getPeriodInYears } from '../lib/utils';
import cx from 'classnames';

const Projects = ({ items, show }) => {
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
    <div className="flex flex-col w-full justify-center p-6 md:p-12">
      <h5 className="font-body font-bold text-lg uppercase tracking-tight mb-4">
        Select work from portfolio{' '}
        <span className="text-gray-800">({getPeriodInYears(items)})</span>
        <br /> —
      </h5>
      <motion.ol
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        variants={container}
        className="plist"
      >
        {items
          .slice()
          .reverse()
          .map(({ isComingSoon, url, title, info, client }, i) => (
            <motion.li
              key={`project-${i}`}
              custom={i}
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              variants={variants}
              className={cx('plist__item', {
                'plist__item--coming-soon': isComingSoon,
              })}
            >
              <a
                className="plist__item__title"
                onClick={isComingSoon ? e => e.preventDefault() : null}
                href={isComingSoon ? '#' : url}
                target={isComingSoon ? '_self' : '_blank'}
              >
                {title}
                <div className="plist__item__details text-xs md:text-sm">
                  {isComingSoon ? (
                    'Coming Soon'
                  ) : (
                    <div className="flex flex-col md:flex-row">
                      <div className="info my-2 md:my-0">{info}</div>
                    </div>
                  )}
                </div>
              </a>
            </motion.li>
          ))}
      </motion.ol>
      <style jsx global>{`
        .plist {
          @apply .flex .flex-col .mb-16 .list-none;
        }

        .plist__item {
          @apply .mb-4 .relative;
        }

        .plist__item:last-of-type {
          margin-bottom: 0;
        }

        .plist__item--coming-soon .plist__item__title,
        .plist__item--coming-soon .plist__item__title:hover {
          @apply .cursor-default .text-gray-400;
          opacity: 0.5;
        }

        .plist__item--coming-soon .plist__item__title::before,
        .plist__item--coming-soon .plist__item__title:hover::before {
          @apply .w-full .text-gray-400;
          width: 100%;
          background: rgba(#000, 0.9);
        }

        .plist__item--coming-soon .plist__item__title::after {
          width: 100%;
          background: transparent;
        }

        .plist__item--coming-soon .plist__item__details {
          @apply .text-white;
          opacity: 1;
        }

        .plist__item__title {
          @apply .font-display .font-normal .text-xl .uppercase .inline-block .relative .no-underline .border-0 .leading-none .text-gray-200;
          transition: 0.4s;
        }

        .plist__item__title:hover {
          @apply .text-white;
        }

        .plist__item__details {
          @apply .text-gray-200 .block .font-body .font-bold .uppercase .text-xs .mb-0 .tracking-normal .leading-normal;
        }

        @screen md {
          .plist__item {
            @apply .mb-0;
          }

          .plist__item__title {
            @apply .text-6xl;
            font-size: 5.5vw;
            height: 4vw;
          }

          .plist__item__title::before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-40%);
            height: 30px;
            width: 0;
            transition: width 0s ease, background 0.2s ease;
          }

          .plist__item__title::after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-40%);
            height: 30px;
            width: 0;
            background: theme('colors.orange');
            transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .plist__item__title:hover::before {
            width: 100%;
            background: theme('colors.orange');
            transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .plist__item__title:hover::after {
            width: 100%;
            background: transparent;
            transition: all 0s ease;
          }

          .plist__item__title:hover .plist__item__details {
            opacity: 1;
          }

          .plist__item__details {
            @apply .absolute .px-4 .text-black;
            top: 50%;
            left: 0;
            z-index: 1;
            transform: translateY(-30%);
            transition: all 0.5s ease;
            opacity: 0;
          }

          .plist__item--coming-soon .plist__item__details {
            @apply .text-white;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
