import { motion } from 'framer-motion';
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
    <div className="flex flex-col w-full min-h-screen justify-center">
      {show && <h5>— selected projects</h5>}
      <motion.ol
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        variants={container}
        className="plist max-w-4xl"
      >
        {items.slice().map(({ isComingSoon, url, title, info, client }, i) => (
          <motion.li
            key={`project-${i}`}
            custom={i}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            variants={variants}
            className={cx('plist__item', {
              //'plist__item--coming-soon': isComingSoon,
              'pointer-events-none': !show,
            })}
          >
            <a
              onClick={isComingSoon ? e => e.preventDefault() : null}
              href={isComingSoon ? '#' : url}
              target={isComingSoon ? '_self' : '_blank'}
              rel="noreferrer"
            >
              {title}
            </a>
            <span className="text-base lg:text-lg md:text-right">
              {isComingSoon ? 'Coming Soon' : info}
            </span>
          </motion.li>
        ))}
      </motion.ol>
      <style jsx global>{`
        .plist {
          @apply .flex .flex-col .list-none;
        }

        .plist__item {
          @apply .mb-4 .relative .flex .flex-col;
        }

        .plist__item:last-of-type {
          @apply .mb-0;
        }

        /*.plist__item--coming-soon a {
          @apply .cursor-default .text-gray-800;
          opacity: 0.5;
        }*/

        /*.plist__item--coming-soon span {
          @apply .text-gray-800;
        }*/

        .plist__item a {
          @apply .font-body .font-normal .text-gray-400 .text-2xl .mb-0;
        }

        .plist__item a:hover {
          @apply .text-gray-100;
        }

        .plist__item span {
          @apply .text-gray-800 .font-mono .text-xs .leading-snug;
        }

        @screen md {
          .plist__item {
            @apply .mb-0 .flex-row .justify-between .items-center;
          }

          .plist__item a:hover ~ span {
            opacity: 1;
          }

          .plist__item span {
            @apply .px-4;
            transition: opacity 0.5s ease;
            opacity: 0;
          }
        }

        @screen lg {
          .plist__item a {
            @apply .text-4xl;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
