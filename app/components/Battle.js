const React = require('react')
const Link = require('react-router-dom').Link

class Battle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne: {
        name: '',
        image: ''
      },
      playerTwo: {
        name: '',
        image: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(() => {
      const newState = {}
      newState[id + '.name'] = username,
      newState[id + '.image'] = `https://github.com/${username}.png?size=200`
      return newState
    })
  }

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
