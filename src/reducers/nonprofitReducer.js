const nonprofitReducer = (state = {
    nonprofits: [],
    loading: false
}, action) => {
    //let idx;
    switch(action.type) {

        case "LOADING_NONPROFITS":
            return {
                ...state,
                loading: true
            }
            
        case "FETCH_NONPROFITS":
            return {
                ...state,
                nonprofits: action.payload,
                loading: false
            }

        case "ADD_NONPROFIT":
            return {
                ...state,
                loading: true
            }

        case "NONPROFTI_ADDED":
            return {
                ...state,
                nonprofits: [...state.nonprofits, action.payload],
                loading: false
            }

        default:
            return state

    }
}

export default nonprofitReducer