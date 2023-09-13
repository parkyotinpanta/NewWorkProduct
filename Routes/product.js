const express = require('express')
const router = express.Router()

const {read, create, update, remove, list} = require('../Controllers/product')




// http://localhost:3099/api/product
router.get('/product', list)
router.get('/product/:id', read)
router.post('/product', create)
router.put('/product/:id', update)
router.delete('/product/:id', remove)





module.exports = router