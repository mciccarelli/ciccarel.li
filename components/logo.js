import Link from 'next/link';

export default () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/static/logo.svg" />
      </a>
    </Link>
    <style jsx>{`
      .logo {
        position: fixed;
        left: 0;
        top: 0;
        transform: translateY(0.625rem);
        padding: var(--gutterSmall);

        @media (min-width: 600px) {
          padding: var(--gutterMedium);
        }
        @media (min-width: 800px) {
          padding: var(--gutterLarge);
        }
      }
    `}</style>
  </div>
);
