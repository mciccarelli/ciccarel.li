import LogoSVG from '../static/logo.svg'

export default () => (
  <div className="logo">
    <LogoSVG />
    <style jsx>{`
      .logo {
        position: fixed;
        left: 0;
        top: 0;
        padding: 5rem;
        transform: translateY(1rem);

        * {
          fill: var(--white);
          color: var(--white);
        }
      }
    `}</style>
  </div>
)
