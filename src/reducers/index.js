// curly brackets
// export reducers to app so that app can use it
import jokeReducer from './joke'
import loadingReducer from './loading'
import {combineReducers} from 'redux'

// call combinedReducer here because it's a function by design
// why do I need to call this function? - To combine many reducers
// for example, just like a company has many departments, it needs a director that directs all the activities of all those departments
export default combineReducers({
    joke: jokeReducer,
    //loading is just a key, loadingReducer is what was imported
    loading: loadingReducer
}) //key JO K
//here I'm exporting the result of this function combinedReducer({joke: jokeReducer}) => rootReducer in index.js
// the combination of all the reducers make the state


