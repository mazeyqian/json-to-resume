// Push Tag
import { gitTagPush } from 'mazey/scripts/github-helper.js'
const pkgVersion = require('../package.json').version

gitTagPush(pkgVersion)
  .then(res => {
    if (res) {
      console.log('Pushed tag to GitHub.')
    }
  })
