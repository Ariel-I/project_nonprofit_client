const categoryReducer = (state= {
    categories: [],
    nonprofits: [],
    loading: false
}, action) => {
    switch(action.type) {
        case "LOADING_CATEGORIES":
            return {
                ...state,
                loading: true
            }
            
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
                loading: false
            }

        case "ADD_CATEGORY":
            return {
                ...state,
                loading: true
            }        

        case "CATEGORY_ADDED":
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: false
            }

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
                nonprofits: [...state.nonprofits],
                loading: true
            }

        case "NONPROFTI_ADDED":
            return {
                ...state,
                nonprofits: [...state.nonprofits, action.payload],
                loading: false
            }

        default:
            return state;    
    }   
}


export default categoryReducer;