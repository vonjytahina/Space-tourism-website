import { useRef } from "react";
import { Link } from "react-router-dom";

function Header({ active }) {
  const mobileMenuRef = useRef(null);
  const buttonOpenMenuRef = useRef(null);
  const buttonCloseMenuRef = useRef(null);

  // toggle mobile menu
  const handleMenuOpen = () => {
    mobileMenuRef.current.classList.add("show-mobile-menu");
    setTimeout(() => {
      buttonOpenMenuRef.current.style.display = "none";
      buttonCloseMenuRef.current.style.display = "block";
      mobileMenuRef.current.classList.remove("hide-mobile-menu");
    }, 500);
  };

  const handleMenuClose = () => {
    mobileMenuRef.current.classList.add("hide-mobile-menu");
    setTimeout(() => {
      buttonOpenMenuRef.current.style.display = "block";
      buttonCloseMenuRef.current.style.display = "none";
      mobileMenuRef.current.classList.remove("show-mobile-menu");
    }, 300);
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="rectangle"></div>
      <div className="menu">
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link to="/">
              <b>00</b>
              <span className="menu-name">home</span>
            </Link>
          </li>
          <li className={active === "destination" ? "active" : ""}>
            <Link to="/destination">
              <b>01</b>
              <span className="menu-name">destination</span>
            </Link>
          </li>
          <li className={active === "crew" ? "active" : ""}>
            <Link to="/crew">
              <b>02</b>
              <span className="menu-name">crew</span>
            </Link>
          </li>
          <li className={active === "technology" ? "active" : ""}>
            <Link to="/technology">
              <b>03</b>
              <span className="menu-name">technology</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="mobile-button-open"
        onClick={handleMenuOpen}
        ref={buttonOpenMenuRef}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <div
        className="mobile-button-close"
        onClick={handleMenuClose}
        ref={buttonCloseMenuRef}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <div className="mobile-menu" ref={mobileMenuRef}>
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link to="/">
              <b>00</b>
              <span className="menu-name">home</span>
            </Link>
          </li>
          <li className={active === "destination" ? "active" : ""}>
            <Link to="/destination">
              <b>01</b>
              <span className="menu-name">destination</span>
            </Link>
          </li>
          <li className={active === "crew" ? "active" : ""}>
            <Link to="/crew">
              <b>02</b>
              <span className="menu-name">crew</span>
            </Link>
          </li>
          <li className={active === "technology" ? "active" : ""}>
            <Link to="/technology">
              <b>03</b>
              <span className="menu-name">technology</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
