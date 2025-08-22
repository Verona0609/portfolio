import React from 'react'
import css from './Title.module.css'

const Title = () => {
  return (
   <div className={css.background}>

  <div className={css.topCards}>
    <div className={css.card} onClick={() => window.location.href="/about"}>
      About Me
    </div>
    <div className={css.card} onClick={() => window.location.href="/projects"}>
      Projects
    </div>
  </div>

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

  <div className={css.bottomCards}>
    <div className={css.card} onClick={() => window.location.href="/thoughts"}>
      Thoughts
    </div>
    <div className={css.card} onClick={() => window.location.href="/justme"}>
      Just Me
    </div>
  </div>

</div>

  )
}

export default Title;
