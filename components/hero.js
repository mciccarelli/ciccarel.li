import { motion } from 'framer-motion';

const Hero = () => {
  const items = [
    { text: 'Michael Ciccarelli' },
    { text: 'is a creative developer' },
    { text: 'specialized in front-end' },
    { text: 'ui, <em>&amp;</em> React — Currently' },
    { text: 'based in Miami' },
  ];

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
        duration: 0.5,
      },
    }),
    hidden: { opacity: 0, y: '-50%' },
  };

  return (
    <div className="hero">
      <div className="intro flex flex-col">
        <div className="container mx-auto flex flex-col items-center jusitfy-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex-inline flex-col justify-start"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                animate="visible"
                variants={variants}
                className="row"
              >
                <h2 dangerouslySetInnerHTML={{ __html: item.text }} />
              </motion.div>
            ))}
          </motion.div>
          {/* <div className="annotation">
            <div className="relative flex mx-2">
              <p className="location">scroll down →</p>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx global>{`
        .hero {
          @apply .flex .items-center .justify-center .min-h-screen .relative;
        }

        .hero h1 {
          @apply .font-display .font-light .text-6xl .leading-tight .mb-20 .uppercase;
        }
        .hero h2 {
          @apply .text-xl .font-display .font-light .mb-0 .uppercase;
          white-space: nowrap;
        }

        .hero .row {
          @apply .text-left .relative .inline-flex;
        }

        .hero p {
          @apply .text-xs .font-body .tracking-wide .uppercase;
          color: rgba(0, 0, 0, 0.3);
        }
        .hero .annotation {
          @apply .invisible .fixed;
          right: 4rem;
          bottom: 2rem;
          height: 120px;
        }
        .hero .annotation > div {
          @apply .h-full .relative;
        }
        .hero .location {
          @apply .absolute;
          transform: translateX(-50%) translateY(-50%) rotate(90deg);
          bottom: 50%;
          left: 50%;
          width: 120px;
        }

        @screen md {
          .hero h2 {
            font-size: 6vw;
            line-height: 0.9;
          }
          .hero .row:nth-child(1n) {
            @apply .pl-20;
          }

          .hero .row:nth-child(2n) {
            @apply .pl-2;
          }

          .hero .row:nth-child(3n) {
            @apply .pl-16;
          }

          .hero .row:nth-child(4n) {
            @apply .pl-6;
          }

          .hero .row:nth-child(5n) {
            @apply .pl-24;
          }
        }

        @screen lg {
          .hero .annotation {
            @apply .visible;
          }
          .hero h1 {
            font-size: 18vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
