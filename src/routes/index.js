const { Router } = require('express');
const router= Router();
const { getUsers,  createUser, getUserById, deleteUser, updateUser} = require('../controller/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/createuser', createUser);
router.delete('/deleteuser/:id', deleteUser);
router.put('/updateUser/:id', updateUser);

module.exports= router;
