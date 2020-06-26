//first param is state, second param is actions (plural)
// if you have the equal sign, you must name the function
// in this reducer, you just export anonymous function
// state needs an initial value
// actions contains two values: type, payload. check type to receive payload. The payload will depend on the type of the action
// is type a reserved word? or is it a variable that we will define in the future?

const intialState = [];

// export with no name, then it can be imported with any name, and the whole file will be imported
export default (state = intialState, action) => {
    switch (action.type) {
        case 'GET_JOKES':
            return state

        default:
            return state
    }
}