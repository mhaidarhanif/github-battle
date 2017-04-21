const React = require('react')
const Language = require('./Language')
const RepoGrid = require('./RepoGrid')
const api = require('../utils/api')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      }.bind(this))
  }

  render () {
    return (
      <div>
        <Language
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <p>Loading...</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular
