const axios = require('axios')

const GITHUB_URL = `https://api.github.com`
const GITHUB_CLIENT_ID = ''
const GITHUB_CLIENT_SECRET = ''
const GITHUB_PARAMS = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`

const getProfile = (username) => {
  const url = `${GITHUB_URL}/users/${username}${GITHUB_PARAMS}`
  // console.log('getProfile:', url)
  return axios
    .get(url)
    .then((user) => {
      return user.data
    })
}

const getRepos = (username) => {
  const url = `${GITHUB_URL}/users/${username}/repos${GITHUB_PARAMS}&per_page=100`
  // console.log('getRepos:', url)
  return axios
    .get(url)
    .then((user) => {
      return user.data
    })
}

const getStarCount = (repos) => {
  // console.log('getStarCount:', repos.length)
  return repos.reduce(function (count, repo) {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

const getUserData = (player) => {
  // console.log('getUserData:', player)
  return axios
    .all([
      getProfile(player),
      getRepos(player)
    ])
    .then((data) => {
      const profile = data[0]
      const repos = data[1]
      return {
        profile: profile,
        score: calculateScore(profile, repos)
      }
    })
}

const sortPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

const handleError = (error) => {
  console.warn(error)
  return null
}

// -----------------------------------------------------------------------------

module.exports = {
  battle: (players) => {
    return axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },

  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return axios
      .get(encodedURI)
      .then((response) => {
        return response.data.items
      })
      .catch((error) => {
        return error
      })
  }
}
