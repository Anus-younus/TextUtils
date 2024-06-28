import React from 'react'

function Alert(props) {
  return (
    <>
     <div className={`alert alert-${props.mode}`} role="alert">
     <strong>{props.mode}</strong> {props.text}
    </div>
    </>
  )
}

export default Alert
