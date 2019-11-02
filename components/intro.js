export default ({ hide }) => (
  <div className={`intro ${hide ? 'hide' : ''}`}>
    <h1>
      michael ciccarelli — freelance developer based in miami
    </h1>
    <style jsx>{`
      .intro {
        max-width: 420px;
        transition: opacity var(--transitionSpeed) ease-in-out;

        &.hide {
          opacity: 0;
        }
      }
      h1 {
        font-size: 1.125rem;
        font-weight: 200;
        margin: 0;

        @media (min-width: 600px) {
          font-size: 1.5rem;
        }

        & span {
          color: var(--accent);
        }
      }
    `}</style>
  </div>
);
