const categoryReducer = (state= {
    categories: [],
    loading: false
}, action) => {
        //let idx;
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

        default:
            return state;
        }
    }


export default categoryReducer