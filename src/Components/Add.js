import React from 'react'

export default function Add(props) {
    return (
        <button 
            className="actionBtn"
            onClick={props.addClick}
        >
            <p>+</p>
            <span>Add</span>
        </button>
    )
}
