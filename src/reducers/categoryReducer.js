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

        // case "ADD_CATEGORY":
        //     return {
        //         ...state,
        //         loading: true
        //     }        

        // case "CATEGORY_ADDED":
        //     return {
        //         ...state,
        //         categories: [...state.categories, action.payload],
        //         loading: false
        //     }
            
        case "FETCH_NONPROFITS":
            return {
                ...state,
                nonprofits: action.payload,
                loading: false
            }

        case "ADD_NONPROFIT":
           return{
               ...state, 
               loading: true
           }

        case "NONPROFTI_ADDED":
           let np = state.categories.map(c => {
                if (c.id === action.payload.category_id){
                    return {...c, nonprofits: [...c.nonprofits, action.payload]}
                } else {
                    return c
                }
            })
            return {
                ...state, 
                nonprofit: np,
                loading: false 
            }

        default:
            return state;    
    }   
}


export default categoryReducer;