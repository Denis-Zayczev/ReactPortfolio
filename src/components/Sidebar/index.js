import './index.scss'
import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

import {
  faGithub,
  faVk,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="Logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="frontend" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
      <li>
          <a
            href="https://vk.com/den4ik280"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faVk} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Denis-Zayczev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/DenisZaitsevWeb"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
  </div>
)

export default Sidebar
