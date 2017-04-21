const axios = require('axios')

const GITHUB_CLIENT_ID = ''
const GITHUB_CLIENT_SECRET = ''
const params = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
const github_url = `https://api.github.com`

const getProfile = (username) => {
  const url = `${github_url}/users/${username}${params}`
  return axios
    .get(url)
    .then((user) => {
      return user.data
    })
}

const getRepos = (username) => {
  const url = `${github_url}/users/${username}/repos${params}&per_page=100`
  return axios
    .get(url)
    .then((user) => {
      return user.data
    })
}

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return (followers * 3 + totalStars)
}

const getUserData = (player) => {
  return axios
    .all([
      getProfile(player),
      getRepos(player)
    ])
    .then((data) => {
      return {
        profile: data[0],
        score: calculateScore(data[0], data[1])
      }
    })
}

const sortPlayer = (players) => {
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
      .all(players
      .map(getUserData))
      .then(sortPlayerS)
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
