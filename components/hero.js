import { motion } from 'framer-motion';

const Hero = () => {
  const items = [
    { text: 'Michael Ciccarelli ' },
    { text: 'is a <em>developer</em> and <em>consultant</em> ' },
    { text: 'specialized in building high-' },
    { text: 'performant server-side rendered ' },
    { text: 'websites and apps with <em>React &amp; Next.js</em> ' },
    { text: '— currently based in <em>Miami</em>, ' },
    { text: 'where he runs a small dev studio, ' },
    { text: 'and usually works as a remote contractor.' },
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
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <div className="hero">
      <div className="intro flex flex-col">
        <div className="container mx-auto flex flex-col items-center jusitfy-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex-inline flex-col justify-start"
          >
            {items.map((item, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={variants}
                className="row"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            ))}
          </motion.h2>
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

        .hero h2 {
          @apply .text-xl .font-display .font-light .mb-0 .leading-tight .text-justify;
          text-indent: 2.5em;
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
            @apply .max-w-5xl .text-4xl .leading-none;
          }
        }

        @screen lg {
          .hero h2 {
            @apply .text-6xl;
          }

          .hero .annotation {
            @apply .visible;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
