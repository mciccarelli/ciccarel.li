import { motion } from 'framer-motion';

const variants = {
  show: { opacity: 0.5, transition: { duration: 5 } },
  hide: { opacity: 0 },
};

const Symbol = () => {
  return (
    <div className="symbol-container">
      <svg id="symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 707 900">
        <motion.path
          initial="hide"
          animate="show"
          variants={variants}
          d="M 706.643 0 L 524.894 0 L 308.866 216.071 C 354.928 228.214 399.205 244.821 441.161 265.536 Z"
          fill="#231f20"
        ></motion.path>
        <motion.path
          initial="hide"
          animate="show"
          variants={variants}
          d="M 343.859 362.857 C 298.154 344.464 249.771 331.786 199.245 325.714 C 176.036 322.857 152.469 321.429 128.545 321.429 L 128.545 0 L 0 0 L 0 900 L 128.545 900 L 128.545 450 C 167.823 450 205.851 455 242.272 464.464 C 435.626 514.821 578.455 690.714 578.455 900 L 707 900 C 707 656.607 556.673 448.214 343.859 362.857 Z"
          // fill="rgb(35, 31, 32)"
          fill="#231f20"
        ></motion.path>
      </svg>
      <style jsx>{`
        .symbol-container {
          position: fixed;
          left: 0;
          top: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        #symbol {
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Symbol;
