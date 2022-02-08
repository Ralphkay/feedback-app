import React from 'react';
import PropTypes from 'prop-types';

export default function Button({children, isDisabled, version, type}) {
  return <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>{children}</button>;
}


Button.defaultProps = {
    children:'Submit',
    version:'primary',
    type:'submit',
    isDisabled:false
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    isDisabled:PropTypes.bool,
    type:PropTypes.string.isRequired
}