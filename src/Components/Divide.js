import React from 'react'

export default function Divide(props) {
    return (
        <button 
            className="actionBtn"
            onClick={props.divisionClick}
        >
            <p>/</p>
            <span>Divide</span>
        </button>
    )
}