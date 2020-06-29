//This component renders a list of jokes => we need state
//in order to change the position of a joke, user clicks on vote up or down

//to get data from reducer, we import connect from react-redux
import React, { Component } from 'react'
//wrap connect in curly brackets because it's the design of redux
//two ways to export: if you export with default, you just import its name
// 1 . export default JokeList => import JokeList
// 2. export const sum = (a,b) => {...} => import {sum}
import { connect } from 'react-redux'

//this component needs to access state in reducer in order to be rendered
//in order to do this, we pass 2 params to connect():
//1st param: mapStateToProps - get data from state in reducer
//in order to access joke reducer, we can use state.<reducer name>

// we will call action in component to add a new joke
// to get action from action folder, we need to import it

// : colon, ; semicolon , comma
import { getJokes } from '../actions/joke'

class JokeList extends Component {
    //to call action when component is initialized, we use "componentDidMount"
    componentDidMount() {
        this.props.getJokes()
    }

    // render => componentDidMount to get Data => after data is successfully fetched, render will be called again

    render() {
        console.log('this.props', this.props)
        const { jokeList, getJokes } = this.props; //jokeList is from mapStateToProps
        return ( //why paranthesis? to wrap everything. If it's just one line, you don't need the paranthesis here
            <div>
                {jokeList.map(item => <p key={item.id}>{item.joke}</p>)}
                {/* get 10 jokes: write a loop or map? */}
                {/* homework: create action ADD_ONE_JOKE  */}
                <button onClick={() => { }}>Add 1 more joke</button>
            </div>
        )
    }
}
//this function gets called first, before JokeList (line 34)
const mapStateToProps = state => {
    //state here is the combined State (same as rootReducer=combined reducers) (many reducers are combined to form rootReducer)
    //each reducer holds a piece of state
    //in order to get the piece/reducer for jokes, we point it to state.joke
    console.log('state', state.joke) //we get an array of jokes here
    //because mapStateToProps must return an object while state.joke is an array, so we create a new object with jokeList as the key and state.joke as the value
    return { jokeList: state.joke }; //combined reducer = whole state
}

const mapDispatchToProps = { getJokes }
//this is an example of higher order component HOC
export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
