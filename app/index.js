import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

require('./index.css')

var DATA = {
  name: 'Octocat Jr',
  img: 'https://avatars1.githubusercontent.com/u/583231?v=3&s=460',
  username: 'octocat',
  friends: ['Moby Dock', 'Tux Penguin']
}

class Badge extends React.Component {
  render () {
    return (
      <div>
        <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username} />
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

class Avatar extends React.Component {
  render () {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render () {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render () {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}

class FriendsContainer extends React.Component {
  render () {
    return (
      <div>
        <h3>Name: {this.props.data.name} </h3>
        <ShowList list={this.props.data.friends} />
      </div>
    )
  }
}

FriendsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

class ShowList extends React.Component {
  render () {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {this.props.list.map((x) => {
            return <li>{x}</li>
          })}
        </ul>
      </div>
    )
  }
}

class Users extends React.Component {
  render () {
    const friends = this.props.list.filter(x => {
      return x.friend === true
    })

    const enemies = this.props.list.filter(x => {
      return x.friend === false
    })

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(x => {
            return <li key={x.name}>{x.name}</li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {enemies.map(x => {
            return <li key={x.name}>{x.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
)
