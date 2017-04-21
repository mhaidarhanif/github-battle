const React = require('react')
const PropTypes = require('prop-types')

class PlayerInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  render () {
    return (
      <form className='player-form'>
        <label className='label-header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github_username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange} />
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

module.exports = PlayerInput
