import './style.css';

import PropTypes from 'prop-types';
import { FaPlus, FaCheck } from 'react-icons/fa';

export default function Form({ onSubmit, onChange, value, state }) {
  const create = state === 'create';

  return (
    <form onSubmit={onSubmit} className="form">
      {/* New Task Input */}
      <input type="text" value={value} onChange={onChange} />

      {/* Submit button - Create or Save */}
      <button type="submit" className={create ? 'create-btn' : 'save-btn'}>
        {create ? <FaPlus /> : <FaCheck />}
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
