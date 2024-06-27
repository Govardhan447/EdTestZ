import {Link} from 'react-router-dom'
import {SlDiamond} from 'react-icons/sl'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="logo-container">
        <SlDiamond className="logo-icon" />
        <p className="logo">
          <span className="logo-text">Thought</span>
          <br />
          Frameworks
        </p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">
            Services
          </Link>

          <Link to="/getonboard" className="nav-link">
            Get onboard
          </Link>
          <Link to="/insights" className="nav-link">
            insights
          </Link>
          <Link to="/insights" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
