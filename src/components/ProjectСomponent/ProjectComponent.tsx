import { useNavigate } from 'react-router-dom';
import { Project } from '../../constants/PROJECTS_DATA';
import Icon from '../Icon/Icon';
import css from './ProjectComponent.module.css';

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <section className={css.card}>
      <div>
        <picture className={css.image}>
          <source srcSet={project.imageMob} media="(max-width:767px)" />
          <source srcSet={project.imageDesk} media="(max-width:767px)" />
          <img src={project.imageDesk} alt={project.title} />
        </picture>
      </div>
      <div className={css.secondPart}>
        <div className={css.titleBox}>
          <h2 className={css.title}>{project.title}</h2>
          <a href={project.github} className={css.btnGithub}>
            <Icon id="icon-github" size={18} />
          </a>
        </div>
        <div className={css.textBox}>
          <p className={css.text}>{project.description}</p>
          <div className={css.wrap}>
            <a href={project.liveDemo} className={css.btnLive}>
              TAKE A LOOK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
