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
        console.log('results:', results)
      })
  }

  render () {
    const winner = this.state.winner
    const loser = this.state.loser
    const error = this.state.error
    const loading = this.state.loading

    if (loading === true) {
      return (<p>Loading...</p>)
    } else {
      return (<div>Here are the results.</div>)
    }
  }
}

BattleResult.propTypes = {}

module.exports = BattleResult
