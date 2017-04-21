const React = require('react')
const PropTypes = require('prop-types')

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '2em'
  }
}

class Loading extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    const stopper = `${this.props.text}...`
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            text: `${prevState.text}.`
          }
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    return (
      <p style={styles.content}>{this.state.text}</p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}

module.exports = Loading
