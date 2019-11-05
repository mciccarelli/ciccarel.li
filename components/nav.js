const Nav = () => {
  return (
    <nav className="nav">
      <div className="flex justify-end items-center p-10 lg:p-16">
        <ul className="flex">
          <li className="mr-8 lg:mr-16">
            <a href="#">
              <span>Info</span>
            </a>
          </li>
          <li className="mr-8 lg:mr-16">
            <a href="#">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 99;
          width: 100%;
        }

        li {
          @apply .text-xs .font-display .font-bold .uppercase .tracking-wider;
        }

        a {
          @apply .text-grey-light;
          border: 0;
        }

        /*a span {
          position: relative;
        }

        a span::after {
          position: absolute;
          transition: background-color 0.2s ease-in-out 0.15s,
            height 0.2s ease-in-out 0.15s;
          z-index: -1;
          content: '';
          left: -2px;
          bottom: 1px;
          width: calc(100% + 4px);
          height: 0;
          background-color: transparent;
        }

        a:hover span::after,
        a:focus span::after,
        a:active span::after {
          height: 6px;
          background-color: theme('colors.highlighter');
        }*/
      `}</style>
    </nav>
  );
};

export default Nav;
