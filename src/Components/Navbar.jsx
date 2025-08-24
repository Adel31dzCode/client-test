import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css';
import logo from '../Img/logo.jpg';

export default function Navbar() {
  const [Open, SetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // مراقبة ال scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`main-navbar ${Open ? "active-navbar-side" : ""} ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div
          id="burger_menu"
          className={`${scrolled ? "navbar-scrolled-burger" : ""} ${Open ? "active-burger" : ""}`}
           onClick={() => SetOpen(!Open)}>
          <i
            className={
              Open ? "fa-solid fa-bars active-burger-i" : "fa-solid fa-bars"
            }
          />
          <div className="activer" />
        </div>

        <ul id="list-navbar" className={Open ? "active-list" : ""}>
          <form className="search-form-input">
            <button>
              <svg
                width={17}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              className="input"
              placeholder="Type your text"
              required=""
              type="text"
            />
            <button className="reset" type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
          <div id="bg-design">
            <li className="mini-list-navbar current">
              <i className="fa-solid fa-house" /> Accueil
            </li>
            <li className="mini-list-navbar">
              <i className="fa-solid fa-shop" /> Boutique
            </li>
            <li className="mini-list-navbar">
              <i className="fa-solid fa-money-check-dollar" /> Service de Prise
              de Rendez-vous pour le TCF
            </li>
          </div>
          <hr id="separate_contract" />
          <p className="contact_p">
            <i className="fa-solid fa-phone-volume" /> ͏ +1 555-555-5556{" "}
            <i className="fa-solid fa-copy" />
          </p>
          <p className="contact_p">
            <i className="fa-solid fa-envelope" /> ͏ info@yourcompany.example.com{" "}
            <i className="fa-solid fa-copy" />
          </p>
        </ul>

        {/* نضيف كلاس مختلف للوغو عند النزول */}
        <a href="">
          <img
            src={logo}
            alt="logo"
            className={`logo-navbar ${scrolled || Open ? "logo-scrolled" : ""}`}
          />
        </a>

        <ul id="list-navbar-auth">
          <li className="mini-list-navbar-login">
            <a href=""> Se Connectez</a>
          </li>
          <li className="mini-list-navbar-register">
            <a href="">Register</a>
          </li>
        </ul>
      </nav>

      {/* overlay */}
      <div
        className={Open ? "overlay overlay-active" : "overlay"}
        onClick={() => SetOpen(false)}
      />
    </>
  );
}
