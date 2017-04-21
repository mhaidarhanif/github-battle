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
      text: props.text,
      loading: props.loading
    }
  }

  componentDidMount () {
    const stopper = `${this.props.text}...`
    this.setInterval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.state.text
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            text: `${prevState.text}.`
          }
        })
      }
    }, 200)
  }

  render () {
    return (
      <p style={styles.content}>{this.state.text}</p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text: 'Loading'
}

module.exports = Loading
