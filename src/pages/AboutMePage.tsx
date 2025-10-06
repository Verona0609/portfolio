import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import css from './AboutMePage.module.css';

const AboutMePage = () => {
  return (
    <div>
      <div className={css.wrap}>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMePage;
