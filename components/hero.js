import { motion } from "framer-motion";

const Hero = () => {
  const items = [
    { text: "Michael Ciccarelli " },
    { text: "is a creative <em>developer</em> " },
    { text: "and <em>consultant</em> specialized in building " },
    { text: "high-performant server-side rendered websites " },
    { text: "with <em>React &amp; Next.js</em> — currently " },
    { text: "based in <em>Miami</em>, where he runs a " },
    { text: "small dev studio, and usually works as a remote contractor." }
  ];

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const variants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hidden: { opacity: 0, y: -50 }
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
        </div>
      </div>

      <style jsx global>{`
        .hero {
          @apply .flex .items-center .justify-center .min-h-screen .relative;
        }

        .hero h2 {
          @apply .text-xl .font-display .font-light .mb-0 .leading-tight .text-justify;
          text-indent: 2em;
        }

        .hero p {
          @apply .text-xs .font-body .tracking-wide .uppercase;
          color: rgba(0, 0, 0, 0.3);
        }

        @screen md {
          .hero h2 {
            @apply .max-w-4xl .text-5xl .leading-none;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
