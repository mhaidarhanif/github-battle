const React = require('react')
const Language = require('./Language')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selectedLanguage: 'All'}
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }

  render () {
    return (
      <div>
        <Language
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
      />
      </div>
    )
  }
}

module.exports = Popular
