import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import { Icon } from '../Icon/Icon';

const Footer = () => {
  return (
    <footer>
      <div className={css.box}>
        <a className={css.menuItem} href="/">
          <Icon id="icon-home" className={css.icon} size={22} />
        </a>
        <a className={css.menuItem} href="/projects">
          <Icon id="icon-light" className={css.icon} size={22} />
        </a>
        <a className={css.menuItem} href="/tools">
          <Icon id="icon-stack" className={css.icon} size={22} />
        </a>
        <a className={css.menuItem} href="/aboutme">
          <Icon id="icon-user" className={css.icon} size={22} />
        </a>
        <a
          className={css.menuItem}
          href="https://github.com/Verona0609"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub repository"
        >
          <Icon id="icon-github" className={css.icon} size={22} />
        </a>
        <a
          className={css.menuItem}
          href="https://www.linkedin.com/in/veronika-dyka/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open linkedin"
        >
          <Icon id="icon-linkedin" className={css.icon} size={22} />
        </a>
        <a
          className={css.menuItem}
          href="mailto:veronika.dyka06@gmail.com"
          aria-label="send email"
        >
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
