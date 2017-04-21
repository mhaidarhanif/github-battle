const React = require('react')
const PropTypes = require('prop-types')
const queryString = require('query-string')
const api = require('../utils/api')

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
    console.log('players:', players)
    api
      .battle([
        players.playerOne,
        players.playerTwo
      ])
      .then((results) => {
        // console.log('results:', results)
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
      return (<p>Loading...</p>)
    } else if (error) {
      return (<div>{error}</div>)
    } else {
      return (<div>{JSON.stringify(this.state, null, 2)}</div>)
    }
  }
}

BattleResult.propTypes = {}

module.exports = BattleResult
