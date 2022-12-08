const express = require('express');
const router = express.Router();
const controller = require('../controller/usercontroller')


  
router.get('/', controller.getUser);
router.post('/', controller.getPostUser);
router.get('/:id', controller.getOneUser);
router.delete('/:id', controller.getDeleteUser);
router.patch('/:id', controller.getPatchUser);
  





module.exports = router; 