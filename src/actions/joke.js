//import axios to handle API calls
import axios from 'axios';
// we need REST data from API call
// what is action here? getJokes

//actions dispatch data to reducers immediately, but we need some time to wait for data to come back from API
//=> we need middleware to handle. Middleware is located between action and reducer.
//=> when we receive data from API, middleware will dispatch response to reducer

// HOC # HOF => HOF: take a function as parameter

const getRandomNumber = () => Math.floor(Math.random() * 6)

export const getJokes = () => async dispatch => {
  //action returns a type and data
  //will call action loading here BEFORE CALLING API
  dispatch({ type: 'SHOW_LOADING' })
  //axios will return a promise. In  order to handle promise, we need to use "then" or async await
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
    const { id, joke } = response.data;
    //after getting id from the first API call, use the ID to make the second API call to get an image
    const imageResponse = await axios.get(`https://picsum.photos/v2/list`)
    console.log(imageResponse)
    arrJokes.push({
      id,
      joke,
      score: getRandomNumber()
      // image: imageResponse.data[0].url
    })
    count++;
  }

  dispatch({
    type: 'HIDE_LOADING'
  })

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
  const { id, joke } = response.data;
  dispatch({
    type: 'ADD_ONE_JOKE',
    //return one object, not array of jokes
    //initialize the value of score
    payload: { id, joke, score: getRandomNumber() }
  })
}

export const addJokes = (number) => async dispatch => {
  //dispatch an action to change loading state
  dispatch({
    type: 'SHOW_LOADING'
  })

  let jokeArr = [];
  for (let i = 0; i < number; i++) {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    const { id, joke } = response.data;
    jokeArr.push({ id, joke, score: getRandomNumber() })
  }

  dispatch({
    type: 'ADD_JOKES',
    //return the aray of new jokes
    payload: jokeArr
  });

  dispatch({
    type: 'HIDE_LOADING'
  })
}

export const increaseVote = (id) => async dispatch => {
  dispatch({
    type: 'INCREASE_VOTE',
    payload: id // just passing id to reducer because reducer doesn't know about the id yet. Action doesn't have state
    //find() item with that id and then item.score++
    //how do we get score? Wil said that sometimes we can get from API, sometimes we don't need to. We just need a state on the front end to manipulate score.
    //sometimes API don't return value of state, for example: score, but our app needs "score" on client(front end/browser) => we must create on client. FE and BE are separate
    //writing an API would take much/a lot of time because time is uncountable
  })
}
