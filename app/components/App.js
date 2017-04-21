const React = require('react')
const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route
const Popular = require('./Popular')

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Route path='' component={Popular} />
          <Route path='/popular' component={Popular} />
          <Route path='/battle' component={Popular} />
        </div>
      </Router>
    )
  }
}

module.exports = App
