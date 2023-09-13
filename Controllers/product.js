const Productx = require('../Models/Productx')

exports.read = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const producted = await Productx.findOne({ _id: id }).exec()
        res.send(producted)
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}

exports.list = async (req, res) => {
    try {
        // code
        const producted = await Productx.find({}).exec()
        res.send(producted)
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}
exports.create = async (req, res) => {
    try {
        // code
        console.log(req.body)
        const product = await Productx(req.body).save()
        res.send(product)
    } catch (err) {
        // err
        console.log(err)
        res.status(500).send('server error')
    }
}
exports.update = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const updated = await Productx
        .findOneAndUpdate({_id:id},req.body,{new:true}).exec()

        res.send(updated)
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}
exports.remove = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const remove = await Productx
        .findOneAndDelete({_id:id}).exec()
        res.send(remove)
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
}