const React = require('react')
const Link = require('react-router-dom').Link

class Battle extends React.Component {
  render () {
    return (
      <div className='container-battle'>
        <h1>Let's Battle!</h1>
        <p>Pick two GitHub usernames.</p>
      </div>
    )
  }
}

module.exports = Battle
