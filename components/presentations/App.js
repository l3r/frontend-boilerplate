import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import Panel from '../containers/Panel'

const App = (props) => (
  <div>
    <Helmet title="Frontend App" />
    <Panel />
    {props.children}
  </div>
)

export default App