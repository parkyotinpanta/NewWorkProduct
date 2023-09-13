const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors =require('cors')
const bodyParser =require('body-parser')

const connectDB = require('./Config/DB')

const app = express()
connectDB()


app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit:'10mb'}))


// เรียกทั้งไฟล์
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/'+ r))) 

app.listen(3099, () => console.log('Goooo!'))


// บรรทัดที่13-14 คือการเขียนให้อ่านในโฟร์เดอร์ทั้งหมด