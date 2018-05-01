export default ({ hide }) => (
  <h1 className={`${hide ? 'hide' : ''}`}>
    hi, i'm michael ciccarelli, a freelance <span>web developer</span> based in
    brooklyn, new york.
    <style jsx>{`
      h1 {
        font-size: 1.125rem;
        font-weight: 200;
        max-width: 400px;
        margin: 0;
        transition: opacity var(--transitionSpeed) ease-in-out;

        @media (min-width: 600px) {
          font-size: 1.375rem;
        }

        &.hide {
          opacity: 0;
        }

        & span {
          color: var(--accent);
        }
      }
    `}</style>
  </h1>
)
