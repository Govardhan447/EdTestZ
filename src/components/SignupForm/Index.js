import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {LuEyeOff} from 'react-icons/lu'

import './index.css'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeConfirmPassword = event => {
    this.setState({password: event.target.value})
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

  renderConfirmPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangeConfirmPassword}
          placeholder={LuEyeOff}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="login-form-container">
          <form className="form-container">
            <h1 className="login-heading">Signup</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className="input-container">
              {this.renderConfirmPasswordField()}
            </div>

            <button type="submit" className="login-button">
              Signup
            </button>
            <p className="no-account">
              Already have an account?
              <Link to="/login">
                <span className="signup-link">Login</span>
              </Link>
            </p>
            <p className="line">
              <hr width={100} height={0} margin={2} />
              Or
              <hr width={100} height={0} margin={2} />
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

export default SignupForm
