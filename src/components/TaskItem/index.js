import './style.css';

import PropTypes from 'prop-types';
import { FaTrash, FaPencil } from 'react-icons/fa6';

export default function TaskItem({ id, text, onEdit, onDelete }) {
  return (
    <li className="task-item">
      {text}
      <div>
        <button
          className="edit"
          onClick={() => {
            onEdit(id);
          }}
        >
          <FaPencil />
        </button>
        <button
          onClick={() => {
            onDelete(id);
          }}
          className="delete"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
