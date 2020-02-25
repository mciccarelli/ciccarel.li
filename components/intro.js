import { socialLinks } from '../data';

const Intro = () => (
  <div className="max-w-md mb-12 md:mb-24 pt-12">
    <h1>— michael ciccarelli</h1>
    <p className="font-normal mb-12 md:mb-24">
      a freelance developer based in miami—building websites, apps, digital
      platforms and bespoke user experiences with clients prepared to work as
      close creative collaborators.
    </p>
    <ul className="flex flex-col mb-12">
      {socialLinks.map(({ href, handle, title }, idx) => (
        <li key={`social-link-${idx}`}>
          <a href={href} title={title} data-tooltip={handle}>
            {title}
          </a>
        </li>
      ))}
    </ul>
    <div className="font-mono text-xs text-gray-600 mb-12">—</div>
    <div className="font-mono text-xs text-gray-600 opacity-75 uppercase mb-12 md:mb-24">
      360 nw 27th st
      <br />
      miami, fl 33127
    </div>
    <style jsx>{`
      p {
        @apply text-base mb-8;
      }

      p a {
        @apply italic;
      }

      li {
        @apply uppercase leading-none;
      }

      li a {
        @apply font-mono text-xs .text-gray-600;
      }

      li a:after {
        @apply opacity-0;
        content: attr(data-tooltip);
        transition: all 0.5s ease;
      }

      li a:hover:after {
        @apply opacity-50;
      }

      p:last-of-type {
        @apply mb-20;
      }
    `}</style>
  </div>
);

export default Intro;
