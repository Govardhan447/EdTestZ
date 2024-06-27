import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

import './index.css'

class SigninForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="login-form-container">
          <form className="form-container">
            <h1 className="login-heading">login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <p className="forgot-password">forgot password?</p>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="no-account">
              Don't have an account?
              <Link to="/signup" className="signup-link">
                SignUp
              </Link>
            </p>

            <p className="line">
              <hr width={100} height={0} />
              Or
              <hr width={100} height={0} />
            </p>

            <button type="button" className="facebook-btn">
              <FaFacebook className="fb-icon" />
              <p className="login-text">Login with Facebook</p>
            </button>
            <button type="button" className="google-btn">
              <FcGoogle className="g-icon" />
              <p className="login-text">Login with Google</p>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SigninForm
