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
                <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></a></li>
                <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
</svg></a></li>
                <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg></a></li>
            </ul>
          </div>
          <div className="header-item-right">
            <div className="main-icon-form-media">
              <div className="wsdd">
                <ul>$ git push origin main
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
