// we need REST data from API call
// what is action here? getJokes
export const addJoke = () => {
    //action returns a type and data

    return {
        type: 'ADD_JOKE',
        payload: {
            id: 3,
            joke: 'LOL'
        }
    }
}