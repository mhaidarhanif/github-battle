const React = require('react')
const PropTypes = require('prop-types')

const PlayerPreview = (props) => {
  return (
    <div>
      <div className='player-profile'>
        <img
          className='avatar'
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
        />
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

module.exports = PlayerPreview
