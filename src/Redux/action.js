import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from "./constants"

export const addAction = (value1, value2) => {
    return {
        type : ADDITION,
        payload : {
            value1 : value1,
            value2 : value2
        }
    }
}

export const subtractAction = (value1, value2) => {
    return {
        type : SUBTRACTION,
        payload : {
            value1 : value1,
            value2 : value2
        }
    }
}

export const multiplyAction = (value1, value2) => {
    return {
        type : MULTIPLICATION,
        payload : {
            value1 : value1,
            value2 : value2
        }
    }
}

export const divisionAction = (value1, value2) => {
    return {
        type : DIVISION,
        payload : {
            value1 : value1,
            value2 : value2
        }
    }
}