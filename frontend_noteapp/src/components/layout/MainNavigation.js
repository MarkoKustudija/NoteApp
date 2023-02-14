import { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

  const {id}  = useParams();

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

            {/* <li>
              <NavLink to ="/update-note/:id" activeClassName={classes.active}>
                Update Note
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
