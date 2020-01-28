import { withRouter } from 'next/router';
import { motion } from 'framer-motion';
import { socialLinks, siteLinks } from '../data';
import cx from 'classnames';

const Menu = ({ router, menuOpen, menuToggle }) => {
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

  const handleClick = href => {
    router.push(href);
    menuToggle(!menuOpen);
  };

  return (
    <div className="menu px-8 md:px-24 py-24 md:pt-32">
      <div className="flex items-center text-white mb-8">
        <div className="sep" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="social-icons flex items-center"
        >
          {socialLinks.map(({ href, image, title }, idx) => (
            <motion.a
              key={`social-link-${idx}`}
              custom={idx}
              animate="visible"
              variants={variants}
              href={href}
              title={title}
            >
              <img src={image} alt={title} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-col"
      >
        {siteLinks.map(({ href, text, description, isComingSoon }, idx) => (
          <motion.li
            key={`social-link-${idx}`}
            custom={idx}
            animate="visible"
            variants={variants}
          >
            <div
              onClick={() => handleClick(href)}
              className={cx({
                active: router.pathname === href,
                'coming-soon': isComingSoon,
              })}
            >
              <span>{text}</span>
            </div>

            <span>{description}</span>
          </motion.li>
        ))}
      </motion.ul>

      <style jsx global>{`
        .menu {
          @apply .bg-purple-dark .min-h-screen .w-full .fixed .z-10 .left-0 .top-0;
        }

        .menu .sep {
          @apply .mr-8 .pl-1 .bg-white;
          height: 1px;
          width: 40px;
          content: '';
        }

        .menu li {
          @apply .text-white .flex .flex-col .mb-4;
        }

        .menu li .coming-soon {
          @apply .text-grey-dark .line-through .opacity-25 .pointer-events-none;
        }

        .menu li > div {
          @apply .text-2xl .font-body .font-bold .cursor-pointer .mb-2;
        }
        .menu li > span {
          @apply .hidden;
        }

        .menu .social-icons a {
          @apply .mr-6;
        }
        .menu .social-icons img {
          height: 21px;
        }

        .menu li div span {
          @apply .relative;
        }

        .menu li div span::after {
          @apply .absolute .bg-transparent;
          transition: width 0.2s ease-in-out 0.15s;
          content: '';
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
        }

        .menu li div:hover span::after,
        .menu li div.active span::after {
          @apply .bg-purple-light;
          width: 50px;
        }

        @screen md {
          .menu li {
            @apply .flex-row .items-center .mb-0;
          }

          .menu li > div span {
            @apply .text-6xl .mr-16 .mb-0;
          }
          .menu li > span {
            @apply .text-base .block .font-body;
          }

          .menu li div span::after {
            height: 4px;
            bottom: -4px;
          }

          .menu .social-icons a {
            @apply .mr-6;
          }
          .menu .social-icons img {
            height: 21px;
          }
        }
      `}</style>
    </div>
  );
};

export default withRouter(Menu);
