import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from "./constants"

const initialState = { 
    result : 0
}

export const calcReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDITION:
            return{
                ...state,
                result : Number(action.payload.value1) + Number(action.payload.value2)
            }
        case SUBTRACTION:
            return{
                ...state,
                result : Number(action.payload.value1) - Number(action.payload.value2)
            }
        case MULTIPLICATION:
            return{
                ...state,
                result : Number(action.payload.value1) * Number(action.payload.value2)
            }
        case DIVISION:
            return{
                ...state,
                result : Number(action.payload.value1) / Number(action.payload.value2)
            }
        default:
            return state
    }
}