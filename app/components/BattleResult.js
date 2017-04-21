const React = require('react')
const PropTypes = require('prop-types')
const queryString = require('query-string')
const api = require('../utils/api')

class BattleResult extends React.Component {
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
    return (
      <div>Here are the results.</div>
    )
  }
}

BattleResult.propTypes = {}

module.exports = BattleResult
