import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Header.module.css";
import Footer from "./Footer";

const Header = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Header;
