import React, { PropTypes } from 'react'

import Panel from '../containers/Panel'

const App = (props) => (
  <div>
    <Panel />
    {props.children}
  </div>
)

export default App