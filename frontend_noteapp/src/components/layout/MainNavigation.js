import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}> NoteApp </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/notes" activeClassName={classes.active}>
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-note" activeClassName={classes.active}>
                New Note
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
