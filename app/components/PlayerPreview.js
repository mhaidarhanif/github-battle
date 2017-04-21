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
        <a href={`https://github.com/${props.username}`}>
          <h3 className='username'>
            @{props.username}
          </h3>
        </a>
        {props.children}
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = PlayerPreview
