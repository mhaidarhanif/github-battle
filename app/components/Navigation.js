const React = require('react')
const ReactRouter = require('react-router-dom')
const Link = ReactRouter.Link
const NavLink = ReactRouter.NavLink

const Navigation = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      </li>
    </ul>
  )
}

module.exports = Navigation
