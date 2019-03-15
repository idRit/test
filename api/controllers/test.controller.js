let TestSchema = require('../models/test.model');

exports.create = (req, res) => {
    
    console.log(req.body.name);
    
    const testObject = new TestSchema({
        name: req.body.name
    });

    testObject.save()
    .then(data => {
        console.log(data)
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

exports.findOne = (req, res) => {
    TestSchema.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ticket."
        });
    });
}