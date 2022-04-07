import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TuniBest
        </a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="أبحث عن مسلسلك المفضل"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            أبحث
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <Link href="/signup">
                <button className="btn btn-primary"> اشترك الان</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <button className="btn btn-primary"> تسجيل الدخول</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
