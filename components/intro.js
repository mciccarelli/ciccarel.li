export default ({ hide }) => (
  <div className={`intro ${hide ? 'hide' : ''}`}>
    <h1>
      michael ciccarelli is a <span>freelance developer</span>
      {` `}
      based in new orleans
    </h1>
    <style jsx>{`
      .intro {
        max-width: 400px;
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
          font-size: 1.375rem;
        }

        & span {
          color: var(--accent);
        }
      }
    `}</style>
  </div>
);
