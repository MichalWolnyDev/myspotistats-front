import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

enum InputActionKind {
    INPUT = 'INPUT',
    BLUR = 'BLUR',
    RESET = 'RESET'
}

interface InputAction {
    type: InputActionKind,
    value: string
}

interface InputState {
    value: string,
    isTouched: boolean
}



const inputStateReducer = (state: InputState, action: InputAction) => {
    if(action.type === InputActionKind.INPUT){
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if(action.type === InputActionKind.BLUR){
        return {
            isTouched: true,
            value: state.value
        }
    }
    if(action.type === InputActionKind.RESET){
        return {
            value: '',
            isTouched: false
        }
    }

    return state
}

const useInput = (validateValue: (param: string) => boolean) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: InputActionKind.INPUT,
            value: e.target.value
        })
    }

    const inputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: InputActionKind.BLUR,
            value: e.target.value
        })
    }

    const reset = () => {
        dispatch({
            type: InputActionKind.RESET,
            value: ''
        })
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;