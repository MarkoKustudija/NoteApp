import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Header;
