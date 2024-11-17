const fs = require('fs')

const jsonContent = fs.readFileSync('users.json', 'utf8')
const users = JSON.parse(jsonContent)

const totalUsers = users.length
console.log(`Total number of users: ${totalUsers}`)

let maxScoreUser = users[0]
users.forEach((user) => {
  if (user.score > maxScoreUser.score) {
    maxScoreUser = user
  }
})
console.log(`User with highest score: ${JSON.stringify(maxScoreUser)}`)

users.sort((a, b) => b.score - a.score)

const sortedData = JSON.stringify(users, null, 2)
fs.writeFileSync('users.json', sortedData)
