import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

require('./index.css')

const App = require('./components/App')

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
