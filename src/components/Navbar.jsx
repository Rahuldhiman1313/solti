import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { ChevronLeft, X } from "lucide-react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const openmenu = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <section className="wrapper">
          <div className="header-item-left">
            <Link to="/" className="brand">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="header-item-center">
            <div
              onClick={() => {
                setActive(false);
                setSubActive(false);
              }}
              className={`overlay ${active ? "active" : ""}`}
            ></div>
            <nav className={`menu ${active ? "active" : ""}`} id="menu">
              <div className="menu-mobile-header">
                <button
                  onClick={() => setSubActive(false)}
                  type="button"
                  className="menu-mobile-arrow"
                >
                   <ChevronLeft />
                </button>
                <div className="menu-mobile-title"></div>
                <button
                  onClick={() => setActive(false)}
                  type="button"
                  className="menu-mobile-close"
                >
                  <X />
                </button>
              </div>
              <ul className="menu-section">
             
                <li onClick={()=>setActive(false)} className="menu-item">
                  <a href="#buy">How to Buy</a>
                </li>
                <li onClick={()=>setActive(false)} className="menu-item">
                  <a href="#faq" className="contsss">Faq</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social">
            <ul>
                <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a></li>
              
                <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg></a></li>
            </ul>
          </div>
          <div className="header-item-right">
            <div className="main-icon-form-media">
              <div className="wsdd">
                <ul>
                  <li className="menu-item">
                    <a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Buy Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="menu-mobile-toggle"
              onClick={openmenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};
