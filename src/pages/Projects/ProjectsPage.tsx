import Footer from '../../components/Footer/Footer';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import css from './ProjectsPage.module.css';
const Projects = () => {
  return (
    <div className={css.container}>
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Projects;
