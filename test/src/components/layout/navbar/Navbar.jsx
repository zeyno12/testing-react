import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../image/makeuplogo.png";
const Navbar = () => {
  return (
    <section>
      <header>
        <nav>
          <div className="container">
            <div className="row mt-3 align-items-center">
              <div className="col-lg-12">
             <div className="main_list">
             <ul>
                  <li>
                    <NavLink to="/">
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      <p>About</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">
                      <p>Services</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">
                      <p>Shop</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pagess">
                      <p>Pages</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">
                      <p>Blog</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      <p>Contact</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rose">
                      <p>Rose</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/prettier">
                      <p>Prettier</p>
                    </NavLink>
                  </li>
                </ul>
             </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};
export default Navbar;
