import React from 'react'

export default function Multiply(props) {
    return (
        <button 
            className="actionBtn"
            onClick={props.multiplyClick}
        >
            <p>x</p>
            <span>Multiply</span>
        </button>
    )
}