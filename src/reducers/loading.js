const initialState = { isLoading: true };

// is this a pure function?
// result of function depends on the parameters

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return {...state, isLoading: true }
        case 'HIDE_LOADING':
            //rturn {state, isLoading: false} => {{isLoading:true}, isLoading: false}
            return { ...state, isLoading: false }
        default:
          return state
    }
}

