import classes from "./Footer.module.css";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <h3>Copyright ⓒ {year}</h3>
    </footer>
  );
};

export default Footer;
