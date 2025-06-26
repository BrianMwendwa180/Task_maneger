const express = require('express');
const { createTask, getMyTasks, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, authorize(['user', 'admin']), createTask);
router.get('/me', protect, authorize(['user', 'admin']), getMyTasks);
router.get('/all', protect, authorize(['admin']), getAllTasks);
router.put("/:id", protect, updateTask );
router.delete("/:id", protect, deleteTask);



module.exports = router;