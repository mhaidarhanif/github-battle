const React = require('react')
const PropTypes = require('prop-types')
const PlayerPreview = require('./PlayerPreview')

const Player = (props) => {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 className='score'>Score: {props.score}</h3>
      {/* <PlayerPreview /> */}
      {/* <div className='profile'>{props.profile}</div> */}
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

module.exports = Player
