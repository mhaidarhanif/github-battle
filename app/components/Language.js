const React = require('react')
const PropTypes = require('prop-types')

const Language = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Go', 'Java', 'CSS']
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
            className={`language ${lang === props.selectedLanguage ? 'selected' : 'unselected'}`}
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

Language.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Language
