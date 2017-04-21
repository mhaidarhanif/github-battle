const React = require('react')
const Link = require('react-router-dom').Link

class Home extends React.Component {
  render () {
    return (
      <div className='container-center'>
        <h1>Super GitHub Battle</h1>
        <p>See popular repos or battle with your friends.</p>
        <ul>
          <li>
            <Link className='button' to='/popular'>Popular!</Link>
          </li>
          <li>
            <Link className='button' to='/battle'>Battle!</Link>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Home
