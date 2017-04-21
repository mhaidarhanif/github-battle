const React = require('react')
const Language = require('./Language')
const api = require('../utils/api')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selectedLanguage: 'All'}
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    api.fetchPopularRepos(this.state.selectedLanguage)
      .then((repos) => {
        console.log(repos)
      })
  }

  updateLanguage (lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
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
