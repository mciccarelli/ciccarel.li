import { Layout, Hero } from '../components';

const HomePage = () => (
  <Layout>
    <Hero />
    <section>new</section>
    <style jsx>{`
      section {
        @apply .min-h-screen;
      }
    `}</style>
  </Layout>
);

export default HomePage;
