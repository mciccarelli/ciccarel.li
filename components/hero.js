import { motion } from 'framer-motion';

const Hero = ({ width }) => {
  return (
    <div className="hero flex items-center justify-center relative">
      <motion.div
        className="intro flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.75 }}
      >
        <div className="container mx-auto flex flex-col items-center jusitfy-center">
          <h1>
            Michael Ciccarelli is a <em>creative developer</em> and{' '}
            <em>consultant</em> based in <em>Miami</em> and <em>New York</em>.
            Specialized in building high-performant server-side rendered
            websites with <em>React & Next.js</em>. Michael runs his own dev
            studio and usually works as a remote contractor.
          </h1>
          {/* <p>find out more →</p> */}
        </div>
      </motion.div>
      <div className="annotation">
        <div className="relative flex mx-2">
          <p className="location">25° 47' 30.2208" N, 80° 11' 35.754" W</p>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
        }
        h1 {
          @apply .text-lg .font-body .font-normal .leading-tight .text-justify .mb-10;
          text-indent: 3em;
        }
        p {
          @apply .text-xs .text-grey-light .font-display .tracking-wide;
        }
        .annotation {
          @apply .invisible .fixed;
          right: 4rem;
          bottom: 2rem;
          height: 300px;
        }
        .annotation > div {
          @apply .h-full;
        }
        .location {
          @apply .absolute;
          transform: translateX(-50%) translateY(-50%) rotate(-90deg);
          top: 50%;
          left: 50%;
          width: 300px;
        }

        @screen lg {
          .annotation {
            @apply .visible;
          }
          h1 {
            @apply .max-w-6xl .text-5xl .leading-tight;
            text-indent: 5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
