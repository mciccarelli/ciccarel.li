import { Layout, Hero } from '../components';

const HomePage = () => (
  <Layout>
    <Hero />
    <style jsx>{`
      section {
        @apply .min-h-screen;
      }
    `}</style>
  </Layout>
);

export default HomePage;
