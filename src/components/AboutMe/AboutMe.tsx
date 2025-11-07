import { Icon } from '../Icon/Icon';
import css from './AboutMe.module.css';
import mountMob from '../../assets/images/AboutMe/mount-mob.webp';
import mountDesk from '../../assets/images/AboutMe/mount-desc.webp';
import meDesk from '../../assets/images/AboutMe/me-desc.webp';

const AboutMe = () => {
  return (
    <section>
      <div className={css.container}>
        <div className={css.desktopFlex}>
          <div className={css.photo}>
            <h1 className={css.titleMob}>
              Hi there! <br /> I’m Veronika Dyka <br />
              Fullstack Developper
            </h1>
          </div>
          <img
            className={css.meImage}
            src={meDesk}
            alt="me-desc"
            loading="lazy"
          />
          <div className={css.wrap}>
            <h1 className={css.titleDesctop}>
              Hi there! <br /> I’m Veronika Dyka <br />
              Fullstack Developper
            </h1>
            <div className={css.box}>
              <p className={css.text}>
                Specializing in React.js, Next.js, JavaScript, and TypeScript,
                with 2 years of hands-on experience building responsive, modern
                web applications that are both fast and user-friendly.
              </p>
              <button className={css.openBtn}>
                <Icon id="icon-open" className={css.open} size={22} />
              </button>
            </div>
            <p className={css.text}>
              Skilled in REST APIs, Node.js integration, and NoSQL databases
              (MongoDB).{' '}
            </p>
            <p className={css.text}>
              I’ve spent over 800 hours coding, constantly exploring new
              technologies and improving my craft. Passionate about clean code,
              smart UI, and teamwork that turns ideas into real, user-focused
              products.
            </p>
          </div>
        </div>
        <div className={css.desktopFlex}>
          <div className={css.wrap}>
            <h2 className={css.hobbyTitle}>Beyond the code</h2>
            <ul className={css.hobbyList}>
              <li className={css.item1}>Dance</li>
              <li className={css.item2}>Books</li>
              <li className={css.item3}>Tennis</li>
              <li className={css.item4}>Piano</li>
              <li className={css.item5}>Hiking</li>
              <li className={css.item6}>Coffee</li>
            </ul>
          </div>
          <picture>
            <source srcSet={mountMob} media="(max-width:767px)" />
            <source srcSet={mountDesk} media="(min-width: 768px)" />

            <img
              className={css.imageDesk}
              src={mountDesk}
              alt="mount-desk"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
