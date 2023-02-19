const express = require('express');
const { postProject, getAllProject,getSingleProject } = require('../controllers/projectControllers');


//router
const router=express.Router();

//routes
//get a all projects
router.get('/',getAllProject)

//get a single projects
router.get('/:id',getSingleProject)

//post a new project
router.post('/',postProject)

//Delete a new project
router.delete('/:id',(req,res)=>{
    res.json({message:"delete a new project"})
})

//post a new project
router.patch('/:id',(req,res)=>{
    res.json({message:"patch a new project"})
})


module.exports=router;