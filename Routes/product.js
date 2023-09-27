const express = require('express')
const router = express.Router()

const {read,
    create,
    update,
    remove,
    list
    } = require('../Controllers/product')
// ดึงตัวแปรครบทุกตัว ให้ได้ใช้ในไฟล์สินค้า 
const {auth} = require('../Middleware/auth')


// http://localhost:3099/api/product
router.get('/product',auth, list)
router.get('/product/:id',auth, read)
router.post('/product',auth, create)
router.put('/product/:id',auth, update)
router.delete('/product/:id',auth, remove)





module.exports = router

// หน้านี่คือการกำหนดค่า CRUD ว่าถึงมาจาก controllers ไหนบ้าง สังเกตุจากบรรทัดสีแดง 