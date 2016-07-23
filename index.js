import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './components/containers/Root'
import configureStore from './store/configureStore'

require('font-awesome-webpack');
require('!style!css!sass!./style/index.scss');

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store}
        history={history} />,
  document.getElementById('root')
)