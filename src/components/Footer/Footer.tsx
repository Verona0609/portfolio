import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import { Icon } from '../Icon/Icon';

const Footer = () => {
  return (
    <footer>
      <div className={css.box}>
        <Link className={css.menuItem} to="/">
          <Icon id="icon-home" className={css.icon} size={22} />
        </Link>
        <Link className={css.menuItem} to="/projects">
          <Icon id="icon-light" className={css.icon} size={22} />
        </Link>
        <Link className={css.menuItem} to="/tools">
          <Icon id="icon-stack" className={css.icon} size={22} />
        </Link>
        <Link className={css.menuItem} to="/aboutme">
          <Icon id="icon-user" className={css.icon} size={22} />
        </Link>
        <a className={css.menuItem} href="https://github.com/Verona0609">
          <Icon id="icon-github" className={css.icon} size={22} />
        </a>
        <a
          className={css.menuItem}
          href="https://www.linkedin.com/in/veronika-dyka/"
        >
          <Icon id="icon-linkedin" className={css.icon} size={22} />
        </a>
        <a className={css.menuItem} href="mailto:veronika.dyka06@gmail.com">
          <Icon id="icon-mail" className={css.icon} size={22} />
        </a>
        <button className={css.menuItem} type="button">
          <Icon id="icon-sun" className={css.icon} size={22} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
