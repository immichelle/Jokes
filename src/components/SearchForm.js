import React, { Component } from 'react'

export class SearchForm extends Component {
    state = { //1. initialize state with an empty value
        searchTerm: '',
        score: ''
    }

    handleChange = (e) => { //3.this function's job is to update the value in state to match the new value (new event that is being passed from onChange)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('line 18',this.state)
        this.setState({ [e.target.name]: e.target.value }, () => {
            console.log('line 14',this.state)
            //all updated state is at here
        }) //after this, we have a new value for this.state.value => at here , the state doesn't immediately update. SetState is an async function


    }

    handleSubmit = e => {//5.
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm)//send the search Term to SearchForm component in jokelist
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='searchTerm'
                    value={this.state.searchTerm} //4. update value - this is the front end value in the input form
                    onChange={(e) => this.handleChange(e)}//2.this fires first, does 2 things: 1.captures the input in the form (event), 2. runs handleChange
                />
                <input
                    type='text'
                    name="score"
                    value={this.state.score} //4. update value - this is the front end value in the input form
                    onChange={(e) => this.handleChange(e)}//2.this fires first, does 2 things: 1.captures the input in the form (event), 2. runs handleChange
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default SearchForm
