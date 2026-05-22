const express = require('express');

const router = express.Router();

const studentController =
require('../controllers/studentController');


// HOME

router.get('/',
studentController.getAllStudents);


// ADD

router.get('/add',
studentController.showAddForm);

router.post('/add',
studentController.addStudent);


// EDIT

router.get('/edit/:id',
studentController.showEditForm);

router.put('/edit/:id',
studentController.updateStudent);


// DELETE

router.delete('/delete/:id',
studentController.deleteStudent);


module.exports = router;