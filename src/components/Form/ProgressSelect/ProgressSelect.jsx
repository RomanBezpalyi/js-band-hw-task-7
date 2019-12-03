import React from 'react';
import PropTypes from 'prop-types';

const ProgressSelect = ({ value, handleChange }) => (
  <select
    className="form-control col-xs-6 col-md-3"
    name="progress"
    value={value}
    onChange={handleChange}
  >
    <option value="All">All</option>
    <option value="Open">Open</option>
    <option value="Done">Done</option>
  </select>
);

ProgressSelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProgressSelect;
