import { Layout, Intro, Feed, Contact } from '../components';

const HomePage = () => (
  <Layout>
    <section className="flex flex-col items-start jusitfy-start max-w-2xl p-8 md:p-16">
      <Intro />
      <Feed />
      <Contact />
    </section>
  </Layout>
);

export default HomePage;
