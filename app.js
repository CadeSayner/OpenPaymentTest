const express = require('express')
const app = express()
const port = 3000

import handlePayment from './index.js'

app.get('/', (req, res) => {
    handlePayment();
    res.send('Is it working');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
