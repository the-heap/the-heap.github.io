const fetch = require('node-fetch')
const fs = require('fs')

var out = {}

function getRepoData() {
  fetch('https://api.github.com/orgs/the-heap/repos')
    .then(res => res.json()).then(data => {
      data.forEach(repo => {
        fetch(repo.contributors_url) // nested request for contributor information
        .then(res => res.json()).then(res => {
          var contributors = res
          serializeData(repo, contributors)
        })
      })
    })
}

function serializeData(repo, contributors) {
  out[repo.name] = {
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    contributors
  }

  // makes me sad but i'm lazy.
  var outFile = __dirname + '/../data/repo_data.json' 
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2))
}

getRepoData()




