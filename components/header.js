import { Logo } from './'

export default () => (
  <header className="header">
    <Logo />
    <h1 className="header__text">
      hi, i'm michael ciccarelli, a <span>creative technologist</span> based in
      brooklyn, new york.
    </h1>
    <style jsx>{`
      .header {
        padding: 5rem;
        position: absolute;
        top: 0;
        right: 0;
        &__text {
          max-width: 400px;
          text-align: right;
          font-size: 1.375rem;
          font-weight: 200;
          margin: 0;
          & span {
            color: var(--accent);
          }
        }
      }
    `}</style>
  </header>
)
