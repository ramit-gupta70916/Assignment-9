let students = [

    {
        id: 1,
        name: 'Ramit',
        course: 'MCA',
        marks: 88
    },

    {
        id: 2,
        name: 'Swayam',
        course: 'BCA',
        marks: 92
    }

];


// GET ALL STUDENTS

exports.getAllStudents = (req, res) => {

    res.render('index', { students });

};


// SHOW ADD FORM

exports.showAddForm = (req, res) => {

    res.render('addStudent');

};


// ADD STUDENT

exports.addStudent = (req, res) => {

    const { name, course, marks } = req.body;

    const newStudent = {

        id: students.length + 1,

        name,

        course,

        marks

    };

    students.push(newStudent);

    res.redirect('/');

};


// SHOW EDIT FORM

exports.showEditForm = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    res.render('editStudent', { student });

};


// UPDATE STUDENT

exports.updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    student.name = req.body.name;

    student.course = req.body.course;

    student.marks = req.body.marks;

    res.redirect('/');

};


// DELETE STUDENT

exports.deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.redirect('/');

};