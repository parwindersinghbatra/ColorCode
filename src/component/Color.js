import React from 'react'

const Color = (props) => {
  return (
    <div style={{
        width: '20%',
        border: '1px solid black',
        margin:'20px 20px'
    }}>
      <div style={{
        height: '150px',
        backgroundColor: props.colorCode,
    }}>

    </div>
      <h4>#FF6663</h4>
      <span style={{
        color: props.colorCode,
    }}
    >{props.colorName}</span>
    </div>
  )
}

export default Color