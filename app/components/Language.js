const React = require('react')
const PropTypes = require('prop-types')

const Language = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Go', 'Java', 'CSS']
  return (
    <ul className='languages'>
      {languages.map((x) => {
        return (
          <li
            onClick={props.onSelect.bind(null, x)}
            key={x}
            className={`language ${x === props.selectedLanguage ? 'selected' : null}`}>
            {x}
          </li>
        )
      }, this)}
    </ul>
  )
}

Language.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Language
