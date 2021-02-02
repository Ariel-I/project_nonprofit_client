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

        default:
            return state;
        }
    }


export default categoryReducer