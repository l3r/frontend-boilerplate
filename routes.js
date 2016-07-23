import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/presentations/App'
import Home from './components/presentations/Home'
import About from './components/presentations/About'

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </div>
)
