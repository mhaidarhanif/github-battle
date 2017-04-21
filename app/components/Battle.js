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
      },
      match: {
        url: 'battle'
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
    const match = this.state.match
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
              username={playerOne.name}>
              <a
                className='reset'
                onClick={this.handleReset.bind(null, 'playerOne')}>
                Reset Player
              </a>
            </PlayerPreview>}

          {!playerTwo.name &&
            <PlayerInput
              id='playerTwo'
              label='Player 2'
              onSubmit={this.handleSubmit}
            />}
          {playerTwo.name !== '' &&
            <PlayerPreview
              id='playerTwo'
              avatar={playerTwo.image}
              username={playerTwo.name}>
              <a
                className='reset'
                onClick={this.handleReset.bind(null, 'playerTwo')}>
                Reset Player
              </a>
            </PlayerPreview>}
        </div>

        {playerOne.image && playerTwo.image &&
          <Link
            className='button'
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOne=${playerOne.name}&playerTwo=${playerTwo.name}`
            }}>
            Battle!
          </Link>}

      </div>
    )
  }
}

module.exports = Battle
