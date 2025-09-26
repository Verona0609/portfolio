import css from './HomePage.module.css'
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';


const HomePage = () => {
  return (
<div className={css.wrap}>
  <div className={css.content}>
    <Title />
  </div>
  <Footer />
</div>
  )
}

export default HomePage;