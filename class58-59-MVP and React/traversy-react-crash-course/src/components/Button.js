import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClick}) => {
  return <button style={{backgroundColor: color}} className='btn' onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button