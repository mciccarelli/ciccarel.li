import Link from 'next/link'
import LogoSVG from '../static/logo.svg'

export default () => (
  <div className="logo">
    <Link href="/">
      <a>
        <LogoSVG />
      </a>
    </Link>
    <style jsx>{`
      .logo {
        position: fixed;
        left: 0;
        top: 0;
        padding: 5rem;
        transform: translateY(0.625rem);
      }
    `}</style>
  </div>
)
