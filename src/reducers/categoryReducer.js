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

        default:
            return state;
        }
    }


export default categoryReducer