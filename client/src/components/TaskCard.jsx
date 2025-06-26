import React from 'react';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title || task.name || 'Untitled Task'}
        </h3>
        <div className="space-x-2">
          <button
            onClick={() => onToggle(task._id)}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      {task.description && <p className="mt-2 text-gray-700 dark:text-gray-300">{task.description}</p>}
    </div>
  );
}
