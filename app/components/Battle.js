const React = require('react')
const Link = require('react-router-dom').Link
const PlayerInput = require('./PlayerInput')
const PlayerPreview = require('./PlayerPreview')

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
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(() => {
      var newState = {}
      newState[id] = {
        name: `${username}`,
        image: `https://github.com/${username}.png?size=200`
      }
      return newState
    })
  }

  handleReset (id, username) {
    this.setState(() => {
      var newState = {}
      newState[id] = {
        name: '',
        image: ''
      }
      return newState
    })
  }

  render () {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo

    return (
      <div>
        <header>
          <h1>Let's Battle!</h1>
          <h3>Pick two GitHub usernames.</h3>
        </header>
        <div className='container-battle'>
          {!playerOne.name &&
            <PlayerInput
              id='playerOne'
              label='Player 1'
              onSubmit={this.handleSubmit}
            />}
          {playerOne.name !== '' &&
            <PlayerPreview
              id='playerOne'
              avatar={playerOne.image}
              username={playerOne.name}
              onReset={this.handleReset}
            />}

          {!playerTwo.name &&
            <PlayerInput
              id='playerOne'
              label='Player 2'
              onSubmit={this.handleSubmit}
            />}
          {playerTwo.name !== '' &&
            <PlayerPreview
              id='playerTwo'
              avatar={playerTwo.image}
              username={playerTwo.name}
              onReset={this.handleReset}
            />}
        </div>

      </div>
    )
  }
}

module.exports = Battle
