const express = require('express');
const { register, login } = require('../controllers/auth.js');

const router = express.Router();


/* burada cagirilacak olan fonksiyonlar daha sonra controller
    tarafinda gelecek.
*/

// post,update,get, delete CRUD operations will be here
router.post('/register', register)
router.post('/login', login)

module.exports = router

