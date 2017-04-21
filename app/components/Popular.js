const React = require('react')

class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Go', 'Java', 'CSS']
    return (
      <ul className='languages'>
        {languages.map((x) => {
          return (
            <li
              onClick={this.updateLanguage.bind(null, x)}
              key={x}
              className={`language ${x === this.state.selectedLanguage ? 'selected' : 'unselected'}`}>
              {x}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular
