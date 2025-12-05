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
              <li className={css.item1}>
                <abbr data-tooltip="Dance: because happiness sometimes needs choreography.">
                  Dance
                </abbr>
              </li>
              <li className={css.item2}>
                <abbr data-tooltip="Books: because sometimes you need a vacation from your own brain.">
                  Books
                </abbr>
              </li>
              <li className={css.item3}>
                <abbr data-tooltip="Tennis: hitting a tiny ball and hoping physics is on your side.">
                  Tennis
                </abbr>
              </li>
              <li className={css.item4}>
                <abbr data-tooltip="Piano: making your neighbors question their life choices since forever.">
                  Piano
                </abbr>
              </li>
              <li className={css.item5}>
                <abbr data-tooltip="Hiking: walking for hours to eat snacks with a view.">
                  Hiking
                </abbr>
              </li>
              <li className={css.item6}>
                <abbr data-tooltip="Coffee: the reason I look alive in the morning.">
                  Coffee
                </abbr>
              </li>
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
