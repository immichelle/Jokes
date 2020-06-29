//import axios to handle API calls
import axios from 'axios';
// we need REST data from API call
// what is action here? getJokes

//actions dispatch data to reducers immediately, but we need some time to wait for data to come back from API
//=> we need middleware to handle. Middleware is located between action and reducer.
//=> when we receive data from API, middleware will dispatch response to reducer

// HOC # HOF => HOF: take a function as parameter
export const getJokes = () => async dispatch => {
    //action returns a type and data

    //axios will return a promise. In order to handle promise, we need to use "then" or async await
    const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
    console.log(response)
    const { id, joke } = response.data
    dispatch({
        type: 'GET_JOKES',
        payload: {
            id,
            joke
        }
    })


}