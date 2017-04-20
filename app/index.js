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

ReactDOM.render(
  <FriendsContainer data={DATA} />,
  document.getElementById('app')
)
