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
  let count = 0;
  //create a new empty array to prepare for getting 10 jokes from API
  let arrJokes = []
  //for loop can be used here, but while's syntax is shorter
  while (count < 10) {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    const { id, joke } = response.data
    arrJokes.push({ id, joke })
    count++;
  }

  console.log(arrJokes)

  dispatch({
    type: 'GET_JOKES',
    payload: arrJokes
  })


}

export const addOneJoke = () => async dispatch => {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  }
  )
  const {id, joke} = response.data;
  dispatch( {
    type: 'ADD_ONE_JOKE',
    //return one object, not array of jokes
    payload: {id, joke}
  })
}

export const addJokes = (number) => async dispatch => {
  let jokeArr = [];

  for(let i = 0; i < number; i++ ) {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    const {id, joke} = response.data;
    jokeArr.push({id, joke})
  }

  dispatch( {
    type: 'ADD_JOKES',
    //return the aray of new jokes
    payload: jokeArr
  })
}

