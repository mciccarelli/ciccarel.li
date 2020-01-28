import { Layout, Projects } from '../components';
import { API_URL } from '../lib/constants';
import { getPeriodInYears } from '../lib/utils';
import fetch from 'isomorphic-unfetch';

const ProjectPage = ({ projects }) => (
  <Layout>
    <section className="flex flex-col">
      <h5 className="text-lg md:text-2xl leading-normal md:leading-snug mb-8">
        Select client work from my portfolio{' '}
        <span className="text-grey-dark">({getPeriodInYears(projects)})</span>
      </h5>
      <Projects items={projects} />
    </section>
  </Layout>
);

ProjectPage.getInitialProps = async () => {
  const r = await fetch(`${API_URL}/projects`);
  const projects = await r.json();

  return { projects };
};

export default ProjectPage;
