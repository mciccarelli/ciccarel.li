import { Layout, Projects } from '../components';
import { API_URL } from '../lib/constants';
import { getPeriodInYears } from '../lib/utils';
import fetch from 'isomorphic-unfetch';

const ProjectsPage = ({ projects }) => {
  const period = getPeriodInYears(projects);
  return (
    <Layout>
      <section className="flex flex-col items-start jusitfy-start container max-w-4xl mx-auto p-8 md:px-16">
        <h2 className="mb-8">
          — Recent Projects <span className="text-grey-dark">({period})</span>
        </h2>
        <Projects items={projects} />
      </section>

      <style jsx>{`
        .contact {
        }
      `}</style>
    </Layout>
  );
};

ProjectsPage.getInitialProps = async () => {
  const r = await fetch(`${API_URL}/projects`);
  const projects = await r.json();

  return { projects };
};

export default ProjectsPage;
