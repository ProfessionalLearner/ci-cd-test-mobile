const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Word = require('../models/Word');


// @desc Get all words from database
// @route GET api/words
router.get('/', async (req, res) => {
    try {
        const words = await Word.find({});
        return res.status(200).json(words);
    } catch (err) {
        return res.status(500).json({message: 'Something went wrong, try again'});
    }
});

// @desc Add new word to database
// @route POST api/words
router.post('/add',
    [
        check('description', "Invalid word")
        .trim()
        .not().isEmpty().withMessage('Word cannot be empty')
        .isAlphanumeric().withMessage("Must only contain alphabetical or numeric values with no spaces")
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        await Word.create(req.body);
        return res.status(201).json({message: 'word added'});
    } catch (err) {
        res.status(500).json({message: 'Something went wrong, try again'});
    }

})

module.exports = router;