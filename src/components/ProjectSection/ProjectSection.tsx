import { PROJECTS_DATA } from '../../constants/PROJECTS_DATA';
import ProjectComponent from '../ProjectСomponent/ProjectComponent';
import css from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={css.projects}>
      {PROJECTS_DATA.map(project => (
        <ProjectComponent key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectSection;
