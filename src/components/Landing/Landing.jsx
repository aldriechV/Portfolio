import './Landing.css'
import landingImage from '../../assets/image.jpg'

const Landing = () => {

  return (
        <section className='home'>
          <div className='homeContent'>
            <h1>Hi, I'm Aldriech</h1>
            <h3>Full-Stack Developer</h3>
            <p> I build practical applications while exploring cloud technologies and scalable systems.</p>
          <div className="buttons">
            <a href='https://github.com/aldriechV'>My Work</a>
            <a href="https://www.linkedin.com/in/aldriech-villamor/">Contact Me</a>
          </div>
        </div>
        <div className="landing-image">
            <img src={landingImage} alt="Landing visual" />
          </div>
        </section>  
  )
}

export default Landing