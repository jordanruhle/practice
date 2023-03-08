const Pirates = require("../models/pirates.model")


// call back functions separated from routes
// Read All
module.exports.getAllPirates = (req, res) => {
    Pirates.find()
        .then(allPirates => res.json( allPirates ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// Find one
module.exports.findoneSinglePirate = (req, res) => {
    Pirates.findOne({ _id: req.params.id })
        .then(oneSinglePirate => res.json({ pirate: oneSinglePirate }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

//  Create
module.exports.createNewPirate = (req, res) => {
    console.log(req.body)
    Pirates.create(req.body)
        .then(newlyCreatedPirate => res.json({ pirate: newlyCreatedPirate }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// Update
module.exports.updateExistingPirate = (req, res) => {
    Pirates.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPirate => res.json({ pirate: updatedPirate }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// Delete
module.exports.deleteAnExistingPirate = (req, res) => {
    Pirates.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}
