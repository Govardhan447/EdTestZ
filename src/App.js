import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SigninForm from './components/SigninForm'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="bg-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
