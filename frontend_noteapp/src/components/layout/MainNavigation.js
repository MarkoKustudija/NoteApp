import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}> NoteApp </div>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Notes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Footer />
    </Fragment>
  );
};

export default MainNavigation;
