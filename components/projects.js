import { motion } from 'framer-motion';
import cx from 'classnames';

const Projects = ({ items }) => {
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
    <div className="flex flex-col w-full">
      <motion.ol
        initial="hidden"
        animate="visible"
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
              animate="visible"
              variants={variants}
              className={cx('plist__item', {
                'plist__item--coming-soon': isComingSoon,
              })}
            >
              <a
                className="plist__item__title"
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
                      <div className="client md:hidden ">CLIENT: {client}</div>
                    </div>
                  )}
                </div>
              </a>
            </motion.li>
          ))}
      </motion.ol>
      <style jsx global>{`
        .plist {
          @apply .flex .flex-col .mb-10 .list-none;
        }

        .plist__item {
          @apply .mb-8 .relative;
        }

        .plist__item:last-of-type {
          margin-bottom: 0;
        }

        .plist__item--coming-soon .plist__item__title {
          @apply .cursor-not-allowed;
          opacity: 0.5;
        }

        .plist__item--coming-soon .plist__item__title::before,
        .plist__item--coming-soon .plist__item__title:hover::before {
          width: 100%;
          background: rgba(#000, 0.9);
        }

        .plist__item--coming-soon .plist__item__title::after {
          width: 100%;
          background: transparent;
        }

        .plist__item--coming-soon .plist__item__details {
          @apply .text-grey-light;
          opacity: 1;
        }

        .plist__item__title {
          @apply .font-display .text-xl .uppercase .inline-block .relative .no-underline .border-0 .leading-none;
          transition: 0.4s;
        }

        .plist__item__details {
          @apply .font-body .text-grey-light .block .normal-case;
          white-space: nowrap;
        }

        @screen md {
          .plist__item__title {
            @apply .text-6xl;
            height: 50px;
          }

          .plist__item__title::before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
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
            transform: translateY(-50%);
            height: 30px;
            width: 0;
            background: theme('colors.yellow');
            transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .plist__item__title:hover::before {
            width: 100%;
            background: theme('colors.yellow');
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
            @apply .absolute .px-4 .tracking-wide .text-black;
            top: 50%;
            left: 0;
            z-index: 1;
            transform: translateY(-50%);
            transition: all 0.2s ease;
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
