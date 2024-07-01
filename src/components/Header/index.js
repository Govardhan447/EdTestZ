import {Link} from 'react-router-dom'
import {FaCaretDown} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import DatePicker from 'react-calendar'
import {IoClose} from 'react-icons/io5'

import 'react-calendar/dist/Calendar.css'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <img
      className="logo"
      src="https://res.cloudinary.com/ds1piowcn/image/upload/v1719816659/logo_new-removebg-preview_vt41yp.png"
      alt="logo"
    />

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
        <Popup
          trigger={
            <button className="trigger-button" type="button">
              Service <FaCaretDown className="down-btn" />
            </button>
          }
        >
          <div className="draw-box">
            <p>Thought Quality</p>
            <p>Thought Design</p>
            <p>Thought Code</p>
            <p>Thought Ops</p>
            <p>Thought Digital</p>
          </div>
        </Popup>
      </li>
      <li>
        <Link to="/getonboard" className="nav-link">
          Get onboard
        </Link>
      </li>
      <li>
        <Link to="/insights" className="nav-link">
          insights
        </Link>
      </li>

      <li>
        <Popup
          modal
          trigger={
            <Link to="/contactus">
              <button type="button" className="trigger-button">
                Contact Us
              </button>
            </Link>
          }
        >
          {close => (
            <div className="date-picker-container">
              <div className="title-container">
                <p>Hello Client!</p>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <IoClose />
                </button>
              </div>
              <div className="logo-datepicker-container">
                <div className="bug-container">
                  <h1>Hi Iam Gabbug!</h1>
                  <p>
                    Ready for a Quality software? <br /> Lets dig into deep your
                    thoughts
                  </p>
                  <img
                    className="bug-image"
                    src="https://res.cloudinary.com/ds1piowcn/image/upload/v1719825386/animmated_image_h740ik.jpg"
                    alt="bug"
                  />
                </div>
                <div className="date-container">
                  <DatePicker
                    className="date-picker-item"
                    defaultDate={(new Date(2024, 7, 2), new Date(2024, 7, 3))}
                  />
                </div>
              </div>
            </div>
          )}
        </Popup>
      </li>
    </ul>
  </nav>
)

export default Header
