import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignIn from './components/SignIn'

import SignUp from './components/SignUp'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="bg-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
