const React = require('react')
const ReactDOM = require('react-dom')
require('./index.css')

var USER_DATA = {
  name: 'Octocat Jr',
  img: 'https://avatars1.githubusercontent.com/u/583231?v=3&s=460',
  username: 'octocat'
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

ReactDOM.render(
  <Badge user={USER_DATA} />,
  document.getElementById('app')
)
