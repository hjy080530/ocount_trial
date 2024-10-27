import PropTypes from 'prop-types';
import './StatusDiv.css';
import React from 'react';

const StatusDiv = ({ version, children }) => { 
  const className = `status-div ${version}`;
  return <div className={className}>{children}</div>;
};
StatusDiv.propTypes = {
  version: PropTypes.oneOf(['primary', 'secondary', 'thirdary', 'fourthdary']),
  children: PropTypes.node.isRequired,
};
StatusDiv.defaultProps = {
  version: 'primary',
};

export default StatusDiv;