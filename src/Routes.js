import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Games from './components/Games'
import Store from './components/Store'

class Routes extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/games' component={Games}/>
          <Route path='/store' component={Store}/>
        </Switch>
      </main>
    );
  }
}

export default Routes
