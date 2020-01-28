import cx from 'classnames';

const MenuIcon = ({ menuOpen, onClick }) => (
  <div className={cx('menu-icon', { active: menuOpen })} onClick={onClick}>
    <div>
      <span></span>
      <span></span>
    </div>
    {/* <div className="menu-icon__text">{menuOpen ? 'Close' : 'Menu'}</div> */}
    <style jsx>{`
      .menu-icon {
        @apply .relative .cursor-pointer .flex .items-center;
        width: 26px;
        height: 26px;
      }
      .menu-icon__text {
        @apply .uppercase .font-mono .text-xs .select-none;
        transform: translate(32px, -2px);
      }
      .menu-icon div {
        @apply .m-auto .absolute .top-0 .right-0 .left-0 .bottom-0;
        width: 22px;
        height: 12px;
      }
      .menu-icon span {
        @apply .bg-white .absolute .block .w-full;
        height: 2px;
        border-radius: 1px;
        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
      }
      .menu-icon span:first-of-type {
        top: 0;
      }
      .menu-icon span:last-of-type {
        bottom: 0;
      }
      .menu-icon.active span:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      .menu-icon.active span:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
      .menu-icon.active:hover span:first-of-type,
      .menu-icon.active:hover span:last-of-type {
        width: 22px;
      }

      @screen md {
        .menu-icon:hover span:first-of-type {
          width: 26px;
        }

        .menu-icon:hover span:last-of-type {
          width: 12px;
        }
      }
    `}</style>
  </div>
);

export default MenuIcon;
