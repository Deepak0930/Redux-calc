import React, {useState} from 'react'
import Add from "./Add"
import Subtract from "./Subtract"
import Multiply from "./Multiply"
import Divide from "./Divide"
import { useSelector, useDispatch } from "react-redux"
import { addAction, subtractAction, multiplyAction, divisionAction } from "../Redux/action"

export default function Main() {
    const result = useSelector(state=>state.result)
    const [value1,setValue1]=useState('')
    const [value2,setValue2]=useState('')

    const dispatch = useDispatch()

    const resetState=()=>{
        setValue1('')
        setValue2('')
    }

    const addClick=()=>{
        if(value1 !== '' && value2 !== ""){
            dispatch(addAction(value1,value2))
            resetState()
        }else{
            alert("Both Input fields are required")
        }
    }

    const subtractClick=()=>{
        if(value1 !== '' && value2 !== ""){
            dispatch(subtractAction(value1,value2))
            resetState()
        }else{
            alert("Both Input fields are required")
        }
    }
    
    const multiplyClick=()=>{
        if(value1 !== '' && value2 !== ""){
            dispatch(multiplyAction(value1,value2))
            resetState()
        }else{
            alert("Both Input fields are required")
        }
    }

    const divisionClick=()=>{
        if(value1 !== '' && value2 !== ""){
            if(value2 == 0){
                alert("Can't Divide By 0")
                resetState()
            }else{
                dispatch(divisionAction(value1,value2))
                resetState()
            }
        }else{
            alert("Both Input fields are required")
        }
    }

    return (
        <div className="calcApp">
            <div className="header">Calculator</div>
            <div className="inputContainer">
                <input className="input" placeholder="Enter Value 1" type="number" value={value1} onChange={(e)=>setValue1(e.target.value)} />
                <input className="input" placeholder="Enter Value 2" type="number" value={value2} onChange={(e)=>setValue2(e.target.value)} />
            </div>
            <div className="buttonContainer">
                <div className="row1">
                    <Add addClick={addClick} />
                    <Subtract subtractClick={subtractClick}/>
                </div>
                <div className="row2">
                    <Multiply multiplyClick={multiplyClick}/>
                    <Divide divisionClick={divisionClick}/>
                </div>
            </div>
            <div className="result">
                <p>Result:</p><span className="total">{isNaN(result) ? 0 : result}</span>
            </div>
        </div>
    )
}
