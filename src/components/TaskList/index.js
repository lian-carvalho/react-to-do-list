import './style.css';

import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul className="tasksContainer">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          id={index}
          text={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};
