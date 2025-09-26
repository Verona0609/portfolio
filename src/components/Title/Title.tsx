
import css from './Title.module.css'
import { Link } from 'react-router-dom';

const Title = () => {
  return (
   <div className={css.background}>

  <div className={css.topCards}>
    <Link className={`${css.card} ${css.card1}`} to="/about">
      About Me
    </Link>
    <Link className={`${css.card} ${css.card1}`} to="/projects">
      Projects
    </Link>
  </div>
<div className={css.titleContainer}>
  <h1 className={css.title}>
    <span className={css.top}>V</span>
    <span className={css.bottom}>E</span>
    <span className={css.top}>R</span>
    <span className={css.bottom}>O</span>
    <span className={css.top}>N</span>
    <span className={css.bottom}>I</span>
    <span className={css.top}>K</span>
    <span className={css.bottom}>A</span>
  </h1>
</div>
  <div className={css.bottomCards}>
    <Link className={css.card} to="/tools">
      Tools
    </Link>
    <Link className={css.card} to="/justme">
      Just Me
    </Link>
  </div>

</div>

  )
}

export default Title;
