export default ({ hide }) => (
  <h1 className={`${hide ? 'hide' : ''}`}>
    hi, i'm michael ciccarelli, a freelance <span>web developer</span> based in
    brooklyn, new york.
    <style jsx>{`
      h1 {
        max-width: 400px;
        font-size: 1.375rem;
        font-weight: 200;
        margin: 0;
        transition: opacity var(--transitionSpeed) ease-in-out;

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
