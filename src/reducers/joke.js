// many reducers are created to seperate logic and concerns

//first param is state, second param is actions (plural)
// if you have the equal sign, you must name the function
// in this reducer, you just export anonymous function
// state needs an initial value
// actions contains two values: type, payload. check type to receive payload. The payload will depend on the type of the action
// is type a reserved word? or is it a variable that we will define in the future?

//how does a component access state in reducer?

//create dummy data for jokes
const intialState = [
    {
        id: 1,
        joke: 'ha ha ha '
    },
    {
        id: 2,
        joke: 'omg so funny'
    }
];//old reducer
//action impacts old state in reducer and create a new state in reducer

// export with no name, then it can be imported with any name, and the whole file will be imported
export default (state = intialState, action) => {
    switch (action.type) {
        case 'GET_JOKES':
            return state //new state?
        default:
            return state
    }
}

//what is the data type of reducer => depends on how we define it, but it's commonly/usually an object

