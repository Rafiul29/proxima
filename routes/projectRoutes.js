const express = require('express');
const { postProject, getAllProject,getSingleProject,deleteProject,updateProject } = require('../controllers/projectControllers');


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
router.delete('/:id',deleteProject)

//update  a new project
router.patch('/:id',updateProject)


module.exports=router;