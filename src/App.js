import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import {SearchAll} from 'pages/search/search'
import { Home } from 'pages/home'
import Brand from 'pages/brand/brand'
class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path='/home' component={Home}/>
        <Route path="/Search" component={SearchAll} />
        <Route path="/brand" component={Brand} />
      </Switch>
      
    )
  }
}

export default App;
