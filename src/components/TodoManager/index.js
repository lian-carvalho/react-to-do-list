import './style.css';

import { useState, useEffect } from 'react';

import Form from '../Form';
import TaskList from '../TaskList';

export default function TodoManager() {
  const [newTask, setNewTask] = useState('Nova Tarefa');
  const [tasks, setTasks] = useState(() => {
    try {
      const data = localStorage.getItem('tasks');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [formState, setFormState] = useState('create');
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanTask = newTask.trim();

    if (tasks.indexOf(cleanTask) !== -1) return;

    if (editIndex === -1) {
      setTasks([...tasks, cleanTask]);
      setNewTask('');
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = newTask;

    setEditIndex(-1);
    setNewTask('');
    setTasks(updatedTasks);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEdit = (taskIndex) => {
    setEditIndex(taskIndex);
    setNewTask(tasks[taskIndex]);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setFormState(editIndex === -1 ? 'create' : 'save');
  }, [editIndex]);

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <Form onSubmit={handleSubmit} onChange={handleChange} value={newTask} state={formState} />

      <TaskList
        tasks={tasks}
        onEditTask={handleEdit}
        onDeleteTask={handleDelete}
      />
    </div>
  );
}
