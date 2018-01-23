const path = require('path')
const router = require('express').Router()

router.get('/:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/host.html'))
})

module.exports = router
