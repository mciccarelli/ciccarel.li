import Link from 'next/link';
import { introText } from '../data';

const Intro = () => (
  <div className="flex flex-col max-w-xl mb-16">
    <h2
      className="font-body text-lg md:text-2xl leading-normal md:leading-snug mb-4"
      dangerouslySetInnerHTML={{ __html: introText }}
    />
    <p className="text-grey-dark text-sm font-mono">
      [!] Currently accepting new projects for early 2020.
    </p>
  </div>
);

export default Intro;
