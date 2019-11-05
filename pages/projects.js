import { motion } from 'framer-motion';
import { Layout } from '../components';

import data from '../static/data';

const Projects = () => {
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
    <Layout>
      <section className="container mx-auto overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col pt-32 lg:pt-40">
          <h2 className="font-body font-bold mb-12 text-xl uppercase tracking-wider">
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
              .map((item, i) => (
                <motion.li
                  key={`project-${i}`}
                  custom={i}
                  animate="visible"
                  variants={variants}
                  className="plist__item"
                >
                  <div className="plist__item__number">
                    {padNumber(i + 1, 2)}
                  </div>
                  <a
                    className="plist__item__title"
                    href={item.url}
                    target="_blank"
                  >
                    {item.title}
                    <span>{item.info}</span>
                  </a>
                </motion.li>
              ))}
          </motion.ol>
        </div>
      </section>
      <style jsx global>{`
        .plist {
          @apply .flex .flex-col .p-0 .mb-10 .list-none;
        }

        .plist__item {
          @apply .mb-8 .relative;
        }

        .plist__item:last-of-type {
          margin-bottom: 0;
        }

        .plist__item__number {
          @apply .font-body .absolute;
          color: rgba(0, 0, 0, 0.2);
          top: 0;
          left: -2rem;
        }

        .plist__item__title {
          @apply .font-display .text-6xl .uppercase .inline-block .relative .no-underline .border-0 .leading-none;
          transition: 0.4s;
          height: 50px;
        }

        .plist__item__title span {
          @apply .font-bold .text-xs .uppercase .text-white .absolute .tracking-wide;
          white-space: nowrap;
          top: 50%;
          left: 0;
          z-index: 1;
          transform: translateY(-50%);
          transition: all 0.2s ease;
          opacity: 0;
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
          background: theme('colors.highlighter');
          transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .plist__item__title span {
          @apply .font-body .uppercase .block .px-4;
          color: rgba(0, 0, 0, 0.8);
        }

        .plist__item__title:hover::before {
          width: 100%;
          background: theme('colors.highlighter');
          transition: width 0.2s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .plist__item__title:hover::after {
          width: 100%;
          height: 100%;
          background: transparent;
          transition: all 0s ease;
        }

        .plist__item__title:hover span {
          opacity: 1;
        }
      `}</style>
    </Layout>
  );
};

export default Projects;
