const React = require('react')
const PropTypes = require('prop-types')

class Language extends React.Component {
  render () {
    const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Go', 'Java', 'CSS']

    return (<ul className='languages'>
      {languages.map((x) => {
        return (
          <li
            onClick={this.props.onSelect.bind(null, x)}
            key={x}
            className={`language ${x === this.props.selectedLanguage ? 'selected' : null}`}>
            {x}
          </li>
        )
      }, this)}
    </ul>)
  }
}

Language.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Language
