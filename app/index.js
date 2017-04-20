const React = require('react')
const ReactDOM = require('react-dom')
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
        <ShowList friends={this.props.data.friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render () {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {this.props.friends.map((friend) => {
            return <li>{friend}</li>
          })}
        </ul>
      </div>
    )
  }
}

class Users extends React.Component {
  render () {
    const friends = this.props.persons.filter(person => {
      return person.friend === true
    })

    const enemies = this.props.persons.filter(person => {
      return person.friend === false
    })

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(person => {
            return <li key={person.name}>{person.name}</li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {enemies.map(person => {
            return <li key={person.name}>{person.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users persons={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
)
