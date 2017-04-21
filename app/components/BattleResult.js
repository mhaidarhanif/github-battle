const React = require('react')
const PropTypes = require('prop-types')
const queryString = require('query-string')
const api = require('../utils/api')
const Loading = require('./Loading')
const Player = require('./Player')
const Profile = require('./Profile')

class BattleResult extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    const players = queryString.parse(this.props.location.search)

    api
      .battle([
        players.playerOne,
        players.playerTwo
      ])
      .then((results) => {
        if (results === null) {
          return this.setState(() => {
            return {
              error: `Hey there is an error, maybe not both of the users are exist on GitHub.`,
              loading: false
            }
          })
        } else {
          return this.setState(() => {
            return {
              error: null,
              winner: results[0],
              loser: results[1],
              loading: false
            }
          })
        }
      })
  }

  render () {
    const winner = this.state.winner
    const loser = this.state.loser
    const error = this.state.error
    const loading = this.state.loading

    if (loading === true) {
      return (<Loading />)
    } else if (error) {
      return (<div>{error}</div>)
    } else {
      return (
        <div className='container-battle'>
          <Player
            label='Winner'
            score={winner.score}
            profile={winner.profile}
          />
          <Player
            label='Loser'
            score={loser.score}
            profile={loser.profile}
          />
        </div>
      )
    }
  }
}

BattleResult.propTypes = {}

module.exports = BattleResult
