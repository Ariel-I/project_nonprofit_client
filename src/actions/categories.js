export const getCategories = () => {
    return(dispatch) => {
        dispatch({type: "LOADING_CATEGORIES"})
        fetch('/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({type: "FETCH_CATEGORIES", payload: categories}))
    }
}

export const addCategory = () => {
    return(dispatch) => {
        dispatch({type: "ADD_CATEGORY"})
        fetch('/categories', {
            method: 'POST',
            body: JSON.stringify(category),
            headers:{
                'Content-Type': 'application/json'
            }
        }) 
        .then(resp => resp.json())
        .then(category => dispatch({type: "CATEGORY_ADDED", payload: category}))
    }
}