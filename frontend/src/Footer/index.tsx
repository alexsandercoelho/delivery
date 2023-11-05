import './styles.css'
import { ReactComponent as YouTubeIcon } from '../assets/Youtube.svg';
import { ReactComponent as LinkedinIcon } from '../assets/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../assets/Instagram.svg';
function Footer(){
  return (
    <footer className="main-footer">
      App desenvolvido por A2 Consultoria
      <div className="footer-icons">
        <a href="https://youtube.com" target="_mew">
        <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/alexsandercoelho" target="_new">
        <LinkedinIcon />
        </a>
        <a href="https://www.linkedin.com/alexsandercoelho" target="_new">
        <InstagramIcon />
        </a>     
      </div>
    </footer>
    
  )
}

export default Footer;