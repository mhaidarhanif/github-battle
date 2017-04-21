const React = require('react')
const PropTypes = require('prop-types')

class PlayerInput extends React.Component {
  render() {
    return ()
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired 
}

module.exports = PlayerInput
