import {IoLogoWhatsapp} from 'react-icons/io5'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1>DROP BY OR SAY HELLO</h1>
        <p>Whatsup Us Your Requirement!</p>
      </div>
      <button type="button" className="button">
        <IoLogoWhatsapp />
        <p>900-000-0000</p>
      </button>
    </div>
  </>
)

export default Home
