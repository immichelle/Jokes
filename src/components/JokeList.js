//This component renders a list of jokes => we need state
//in order to change the position of a joke, user clicks on vote up or down

//to get data from reducer, we import connect from react-redux
import React, { Component } from 'react'
//wrap connect in curly brackets because it's the design of redux
//two ways to export: if you export with default, you just import its name
// 1 . export default JokeList => import JokeList
// 2. export const sum = (a,b) => {...} => import {sum}
import { connect } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import SearchForm from './SearchForm';
//this component needs to access state in reducer in order to be rendered
//in order to do this, we pass 2 params to connect():
//1st param: mapStateToProps - get data from state in reducer
//in order to access joke reducer, we can use state.<reducer name>

// we will call action in component to add a new joke
// to get action from action folder, we need to import it

// : colon, ; semicolon , comma
import { getJokes, addOneJoke, addJokes, increaseVote, decreaseVote, handleSearch } from '../actions/joke'

class JokeList extends Component {
    state = {
        orderIncrease: false
    }
    //to call action when component is initialized, we use "componentDidMount"
    componentDidMount() {
        this.props.getJokes()
    }

    handleReverseJokes = () => {
        //toggle order Increase
        this.setState({ orderIncrease: !this.state.orderIncrease })
    }

    hello = () => {
        console.log('hello')
    }
    // render => componentDidMount to get Data => after data is successfully fetched, render will be called again

    render() {
        // jokeList and loading are passed down from mapStateToProps
        let { jokeList, getJokes, addOneJoke, addJokes, loading, increaseVote, decreaseVote, handleSearch } = this.props; //
        jokeList = jokeList.sort((a, b) => b.score - a.score)

        if (this.state.orderIncrease === true) {
            jokeList = jokeList.sort((a, b) => a.score - b.score)
        }

        return ( //why parenthesis? to wrap everything. If it's just one line, you don't need the parenthesis here
            <div>
                <PacmanLoader
                    size={150}
                    color={"#123abc"}
                    //when the joke list is waiting for response from API, loading is true. After that, loading is false
                    loading={loading}
                />

                {/* Form to input search term. After searching, the search results will replace the current joke list */}
                <SearchForm onSearch={handleSearch} />

                {jokeList.map((item, index) =>
                    <div style={{ margin: 20 }} key={item.id}>
                        {/* TODO: create 2 buttons: 'up' and 'down' for each joke */}
                        <p>{index + 1}. {item.joke}
                            <button onClick={() => increaseVote(item.id)}>UP</button>
                            <button onClick={() => decreaseVote(item.id)}>DOWN</button>
                            {/* Add a random score to each joke ranging from 0 to 5 */}
                            <span>SCORE: {item.score}</span>
                        </p>
                        {/* in a real project, the URL might be dynamic (not fixed, it can change) => so you don't wanna hardcode it  */}
                        {/* <img src={item.image} ></img> */}
                    </div>
                )}
                {/* get 10 jokes: write a loop or map? */}
                {/* homework: create action ADD_ONE_JOKE  */}
                {/* <button onClick={addOneJoke}>Add 1 more joke</button> */}
                <button onClick={() => addOneJoke()}>Add 1 more joke</button>
                {/* () when onClick trigger , it will call addOneJoke()  */}
                {/* because addOnJoke is a function , You can rewrite addOneJoke()  */}
                {/* TODO: need a select to choose number of jokes => create a dropdown menu with options "Add 2 jokes" "Add 5 jokes" */}
                <select onClick={(e) => { addJokes(e.target.value) }}>
                    {/* we need a state to hold the number (2 or 5) in option */}
                    <option value="2">Add 2 jokes</option>
                    <option value="5">Add 5 jokes</option>
                </select>
                {/* TODO: Get a joke and its image */}
                <button onClick={() => { this.handleReverseJokes() }}>Reverse the order of jokes</button>
            </div>
        )
    }
}
//this function gets called first, before JokeList (line 34)
const mapStateToProps = state => {
    //state here is the combined State (same as rootReducer=combined reducers) (many reducers are combined to form rootReducer)
    //each reducer holds a piece of state
    //in order to get the piece/reducer for jokes, we point it to state.joke
    // console.log('state', state.joke) //we get an array of jokes here
    //because mapStateToProps must return an object while state.joke is an array, so we create a new object with jokeList as the key and state.joke as the value
    return {
        jokeList: state.joke,
        loading: state.loading.isLoading
    }; //combined reducer = whole state
}

const mapDispatchToProps = { getJokes, addOneJoke, addJokes, increaseVote, decreaseVote, handleSearch }
//this is an example of higher order component HOC
export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
