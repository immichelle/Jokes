//convert App into a class component in order to use state
//rce
//install redux and react-redux
//install axios to handle API calls

//Render a list of jokes => create a JokeList component
import React, { Component } from 'react'
import JokeList from './components/JokeList'

class App extends Component {
  render() {
    return (
      <div>
        <JokeList/>
      </div>
    )
  }
}

export default App

