import { Layout, Intro, Feed } from '../components';
import { API_URL } from '../lib/constants';
import fetch from 'isomorphic-unfetch';

const Index = ({ activityItems }) => (
  <Layout>
    <section className="flex flex-col">
      <Intro />
      {activityItems && <Feed items={activityItems} />}
    </section>
  </Layout>
);

Index.getInitialProps = async () => {
  const r = await fetch(`${API_URL}/activity`);
  const activityItems = await r.json();

  return { activityItems };
};

export default Index;
