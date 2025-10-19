import { Icon } from '../Icon/Icon';
import css from './AboutMe.module.css';
import mountMob from '../../assets/images/AboutMe/mount-mob.webp';

const AboutMe = () => {
  return (
    <section>
      <div>
        <div className={css.photo}>
          <h1 className={css.title}>
            Hi there! <br /> I’m Veronika Dyka <br />
            Fullstack Developper
          </h1>
        </div>
        <div className={css.wrap}>
          <div className={css.box}>
            <p className={css.text}>
              Specializing in React.js, Next.js, JavaScript, and TypeScript,
              with 1.5 years of hands-on experience building responsive, modern
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
            I’ve spent over 500 hours coding, constantly exploring new
            technologies and improving my craft. Passionate about clean code,
            smart UI, and teamwork that turns ideas into real, user-focused
            products.
          </p>
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

          <img className={css.image} src={mountMob} alt="mount-mob" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
