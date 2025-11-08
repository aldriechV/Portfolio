import './Landing.css'
import landingImage from '../../assets/IMG_4803.jpg'

const Landing = () => {

  return (
        <section className='home'>
          <div className='homeContent'>
            <h1>Hi, I'm Aldriech</h1>
            <h3>Full-Stack Developer</h3>
            <p> Here are some more words made to better contextualize what text will look like here.</p>
          <img src=''></img>
          <div class="buttons">
            <a href='#'>My Work</a>
            <a href="#">Contact Me</a>
          </div>
        </div>
        <div className="landing-image">
            <img src={landingImage} alt="Landing visual" />
          </div>
        </section>  
  )
}

export default Landing