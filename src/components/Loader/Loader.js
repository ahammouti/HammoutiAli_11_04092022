import React from 'react'

const Loader = (props) => {
    return (
        <div style={{ borderColor: props.color }} className="lds-ripple"><div style={{ borderColor: props.color }} color={props.color}></div><div style={{ borderColor: props.color }}></div></div>
    )
}

export default Loader