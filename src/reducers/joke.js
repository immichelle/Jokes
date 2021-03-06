// many reducers are created to seperate logic and concerns

//first param is state, second param is actions (plural)
// if you have the equal sign, you must name the function
// in this reducer, you just export anonymous function
// state needs an initial value
// actions contains two values: type, payload. check type to receive payload. The payload will depend on the type of the action
// is type a reserved word? or is it a variable that we will define in the future?

//how does a component access state in reducer?

//create dummy data for jokes
// **We can use immerjs to handle immmutable
//redux is immutable so that easy compare change on data
const initialState = [

];//old reducer
//action impacts old state in reducer and create a new state in reducer

// export with no name, then it can be imported with any name, and the whole file will be imported
// in order to change state in reducer, we use action
export default (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case 'GET_JOKES':
            //response from API call
            // return [...state, payload] when we fetch only 1 joke, payload was an object => no need to spread
            //payload now is not an object, but an array, so we need to spread it(payload)
            return [...state, ...payload]

        case 'ADD_ONE_JOKE':
            //handle logic here
            // console.log('action', action)
            //because state in Redux is immutable, we do not change it => we make a copy of old state and add action.payload to old state
            let newState = [...state, action.payload]
            return newState

        case 'ADD_JOKES':
            // in this case: we will get old state + payload (joke list from api)
            return [...state, ...payload]

        case 'INCREASE_VOTE':
            //identify the joke I want to update
            let oldState = [...state] //just getting a copy of state
            // const updatedItem = oldState.find(item => item.id === payload)
            //map oldState to new State
            let secondState = oldState.map(item => {
                if (item.id === payload.id) {
                    item.score = item.score + payload.randomNumber
                }
                return item
            })
            return secondState;

        case 'DECREASE_VOTE':
            return [...state].map(item => {
                if (item.id === payload.id) {
                    item.score = item.score - payload.randomNumber
                }
                return item
            })

        case 'HANDLE_SEARCH':
           // console.log('old state', state)
           // console.log('payload - new state', payload)
            //replace old state with new state
            return payload.searchResults

        default:
            return state
    }
}

//what is the data type of reducer => depends on how we define it, but it's commonly/usually an object

