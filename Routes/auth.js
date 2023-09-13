const express = require('express')
const router = express.Router()
const {readdirSync} =require('fs')


router.get('/auth',(req,res)=>{
    res.send('Hello Auth')
})


module.exports = router