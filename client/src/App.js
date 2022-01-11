import "./App.css"

import LandingPage from './components/landing'
import HomePage from './components/home'
import ActivityCreate from './components/create'
import GetDetailsCountry from './components/detail'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch > 
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/details/:id' component={GetDetailsCountry}/>
          <Route path='/create' component={ActivityCreate}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
