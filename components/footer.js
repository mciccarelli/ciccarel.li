import { socialLinks } from '../data';

const Footer = () => (
  <footer className="bg-black text-gray-700 p-6 md:p-12 flex flex-col font-mono uppercase text-xs">
    <div className="mb-4">&copy; copyright 2020. michael ciccarelli</div>
    <div className="social-icons flex">
      {socialLinks.map(({ href, image, title }, idx) => (
        <a key={`social-link-${idx}`} href={href} title={title}>
          <img src={image} alt={title} />
        </a>
      ))}
    </div>

    <style jsx global>{`
      .social-icons a {
        @apply .mr-4 .opacity-50;
        transition: 0.15s opacity ease-in-out;
      }

      .social-icons a:hover {
        @apply .opacity-100;
      }

      .social-icons img {
        height: 16px;
      }
    `}</style>
  </footer>
);

export default Footer;
