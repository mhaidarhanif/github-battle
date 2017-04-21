const React = require('react')
const Link = require('react-router-dom').Link
const PlayerInput = require('./PlayerInput')

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
      console.log(username)
      var newState = {}
      newState[id] = {
        name: `${username}`,
        image: `https://github.com/${username}.png?size=200`
      }
      return newState
    })
  }

  render () {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo
    return (
      <div>
        <h1>Let's Battle!</h1>
        <p>Pick two GitHub usernames.</p>
        <div className='container-battle'>
          {!playerOne.name && <PlayerInput id='playerOne' label='Player 1' onSubmit={this.handleSubmit} />}
          {!playerTwo.name && <PlayerInput id='playerTwo' label='Player 2' onSubmit={this.handleSubmit} />}
        </div>

      </div>
    )
  }
}

module.exports = Battle
