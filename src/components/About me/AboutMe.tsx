import { Icon } from '../Icon/Icon';
import css from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section>
      <div>
        <h1 className={css.title}>
          Hi there! <br> I’m Veronika Dyka</br> <br>Fullstack Developper</br>
        </h1>
        <p className={css.text}>
          Specializing in React.js, Next.js, JavaScript, and TypeScript with 1.5
          years of practical experience in developing responsive web
          applications.
        </p>
        <button className={css.openBtn}>
          <Icon id="icon-Icon" size={22} />
        </button>
        <p className={css.text}>
          Experienced in REST API development, NoSQL databases (MongoDB), and
          backend integration using Node.js.{' '}
        </p>
        <p className={css.text}>
          Accumulated over 500 hours of programming experience and spend more
          than 50% of my time learning and experimenting with new technologies.
          Strong teamwork skills gained through professional projects and
          collaborative academic work.
        </p>
      </div>
      <div>
        <h2 className={css.hobbyTitle}>Beyond the code</h2>
        <span className={css.item}>Dance</span>
        <span className={css.item}>Books</span>
        <span className={css.item}>Tennis</span>
        <span className={css.item}>Piano</span>
        <span className={css.item}>Hiking</span>
        <span className={css.item}>Hiking</span>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default AboutMe;
