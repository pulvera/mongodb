const express = require('express');
const router = express.Router();

const Employee = require('../Model/Employee.model');


router.post('/', async (req, res, next) =>{
try {
    const employee = new Employee(req.body);
    const result = await employee.save();
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.get('/', async (req, res, next) =>{
try {
    const result = await Employee.find({},{__v: 0});
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
try {
    const result = await Employee.findById(id);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.delete('/:id', async (req, res, next) =>{
    const id = req.params.id;
try {
    const result = await Employee.findByIdAndDelete(id);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.patch('/:id', async (req, res, next) =>{
try {
    const id = req.params.id;
    const updates = req.body;
    const result = await Employee.findByIdAndUpdate(id, updates);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});


module.exports = router;