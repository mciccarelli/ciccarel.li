import { motion } from 'framer-motion';
import { Layout } from '../components';

const Contact = () => {
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
        delay: i * 0.3,
        duration: 0.2,
      },
    }),
    hidden: { opacity: 0, y: '-20%' },
  };

  return (
    <Layout>
      <div className="contact flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="container mx-auto pt-32 lg:pt-40 flex flex-col"
        >
          <motion.section custom={0} animate="visible" variants={variants}>
            <h4>Email</h4>
            <ul className="pl-6">
              <li className="mb-2">
                <a href="mailto:m@ciccarel.li">m@ciccarel.li</a>
              </li>
              <li>
                <a href="mailto:mikecicc@gmail.com">mikecicc@gmail.com</a>
              </li>
            </ul>
          </motion.section>
          <motion.section custom={1} animate="visible" variants={variants}>
            <h4>Elsewhere</h4>
            <ul className="pl-6">
              <li>
                <a href="https://twitter.com/mciccarelli" target="_blank">
                  twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mciccarelli" target="_blank">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://instagram.com/minorvillain" target="_blank">
                  instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/mciccarelli" target="_blank">
                  github
                </a>
              </li>
            </ul>
          </motion.section>
          <motion.section custom={2} animate="visible" variants={variants}>
            <h4>$$</h4>
            <ul className="pl-6">
              <li className="mb-2">Cash App: mciccarelli</li>
              <li className="mb-2">Venmo: mciccarelli</li>
              <li className="mb-2">PayPal: mikecicc@gmail.com</li>
              <li className="mb-2">BTC: 3MSjNKN2bSnHVYgewcemK5fyeGhuhj5XNF</li>
              <li className="mb-2">
                BCH: qz3f7p6m7aaqutkmu6gnlv8477jfyzuncg6grjjwx2
              </li>
              <li className="mb-2">
                ETH: 0x1cdbeD5859A8Ac9F265C3DF1FC875160d6a159A8
              </li>
            </ul>
          </motion.section>
        </motion.div>
      </div>
      <style jsx global>{`
        .contact {
          @apply .min-h-screen;
        }
        .contact section {
          @apply .max-w-3xl mx-auto flex flex-col w-full mb-10;
        }
        .contact h4 {
          @apply .text-5xl .font-display .font-light;
        }

        .contact p,
        .contact li {
          @apply .text-sm;
        }

        .contact a {
          border: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
