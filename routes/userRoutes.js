const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

var users = [
  
]
// skapad av Lehat
router.get('/', (req, res) => {
  res.status(200).json({
    success:true,
    message: 'data fetched successfully',
    data: users
  })
});



//skapad av Zakariye
router.post('/', (req,res) => {
  
  var user = req.body;


  users.push({ ...user, id: uuidv4() });

  res.status(200).json({
    success:true,
    message: (`User with the name ${user.name} added to the database!`),
    data: users
  })

});

//skapad av Lehat
router.get('/:id', (req, res) => {

  var { id } = req.params;

  var foundUser = users.find((user) => user.id === id);
  
  res.send(foundUser);
})


// skapad av Filmon

router.delete('/:id', (req, res) => {

  var { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.status(200).json({
    success:true,
    message: (`User with the id ${id} removed from the database!`),
    data: users
  })

})

// skapad av Kemal
router.patch('/:id', (req, res) => {
  
  var { id } = req.params;
  var { name, age, food} = req.body; 

  var user = users.find((user) => user.id === id );

  if(name) user.name = name;
  if(food) user.food = food; 
  if(age) user.age = age;

  res.status(200).json({
    success:true,
    message: (`User with the id ${id} has been updated from database!`),
    data: users
  })



})
  





module.exports = router; 