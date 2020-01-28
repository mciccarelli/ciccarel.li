import { Layout } from '../components';
import { approach } from '../data';
import Link from 'next/link';

const About = () => (
  <Layout>
    <section className="flex flex-col">
      <div
        className="max-w-lg"
        dangerouslySetInnerHTML={{ __html: approach }}
      />
      <h5 className="text-base mb-4">Let's build something together</h5>
      <p className="text-sm text-grey-dark max-w-md">
        If you have any questions or would like to discuss a poject, please
        either use the{' '}
        <Link href="/contact">
          <a>contact form</a>
        </Link>{' '}
        or send me an email: <a href="mailto:m@ciccarel.li">m@ciccarel.li</a>
      </p>
    </section>
  </Layout>
);

export default About;
