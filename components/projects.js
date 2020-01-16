import { motion } from 'framer-motion';
import cx from 'classnames';

const Projects = ({ data }) => {
  // formating numbers. turn 1, 2 into 01, 02
  const padNumber = (num, size) => {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
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
    <section className="">
      <div className="max-w-3xl flex flex-col items-start justify-start p-8 md:p-12">
        <h2 className="font-body font-bold mb-12 text-sm uppercase tracking-wider">
          Recent projects
        </h2>
        <motion.ol
          initial="hidden"
          animate="visible"
          variants={container}
          className="plist"
        >
          {data.projects
            .slice()
            .reverse()
            .map(({ isComingSoon, url, title, info }, i) => (
              <motion.li
                key={`project-${i}`}
                custom={i}
                animate="visible"
                variants={variants}
                className={cx('plist__item', {
                  'plist__item--coming-soon': isComingSoon,
                })}
              >
                <div className="plist__item__number">{padNumber(i + 1, 2)}</div>
                <a
                  className="plist__item__title"
                  href={isComingSoon ? '#' : url}
                  target={isComingSoon ? '_self' : '_blank'}
                >
                  {title}
                  <span>{isComingSoon ? 'Coming Soon' : info}</span>
                </a>
              </motion.li>
            ))}
        </motion.ol>
      </div>

      <style jsx global>{`
        .plist {
          @apply .flex .flex-col .px-8 .mb-10 .list-none;
        }

        .plist__item {
          @apply .mb-8 .relative;
        }

        .plist__item:last-of-type {
          margin-bottom: 0;
        }

        .plist__item--coming-soon .plist__item__title {
          opacity: 0.5;
        }

        .plist__item--coming-soon .plist__item__title::before,
        .plist__item--coming-soon .plist__item__title:hover::before {
          width: 100%;
          /*background: rgba(#000, 0.9);*/
          background: theme('colors.purple-dark');
        }

        .plist__item--coming-soon .plist__item__title::after {
          width: 100%;
          background: transparent;
        }

        .plist__item--coming-soon .plist__item__title span {
          @apply .text-black;
          opacity: 1;
        }

        .plist__item__number {
          @apply .font-body .absolute .text-xs;
          color: rgba(#000, 0.2);
          top: 0;
          left: -2rem;
        }

        .plist__item__title {
          @apply .font-display .text-xl .uppercase .inline-block .relative .no-underline .border-0 .leading-none;
          transition: 0.4s;
        }

        .plist__item__title span {
          @apply .font-body .text-xs .text-black .block;
          white-space: nowrap;
        }

        @screen md {
          .plist {
            @apply .px-0;
          }

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
            background: theme('colors.purple-light');
            transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .plist__item__title:hover::before {
            width: 100%;
            background: theme('colors.purple-light');
            transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .plist__item__title:hover::after {
            width: 100%;
            background: transparent;
            transition: all 0s ease;
          }

          .plist__item__title:hover span {
            opacity: 1;
          }

          .plist__item__title span {
            @apply .absolute .px-4 .font-bold .uppercase .tracking-wide;
            top: 50%;
            left: 0;
            z-index: 1;
            transform: translateY(-50%);
            transition: all 0.2s ease;
            opacity: 0;
          }

          .plist__item--coming-soon .plist__item__title span {
            @apply .text-white;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
