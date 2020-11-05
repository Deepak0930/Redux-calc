import React from 'react'

export default function Subtract(props) {
    return (
        <button 
            className="actionBtn"
            onClick={props.subtractClick}
        >
            <p>-</p>
            <span>Subtract</span>
        </button>
    )
}