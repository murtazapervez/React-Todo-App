import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default function Button({text , color , onClick, onDoubleClick, className}) {
  return (
    <button className='{className}' style={{ backgroundColor: color}} onClick='{onClick}' onDoubleClick='{onDoubleClick}'>{text}</button>
  )
}

Button.default = {
    className : 'btn',
    color: 'steel-blue'
}


Button.PropTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func
}
