export const getCategories = () => {
    return(dispatch) => {
        dispatch({type: "LOADING_CATEGORIES"})
        fetch('http://localhost:3001/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({type: "FETCH_CATEGORIES", payload: categories}))
    }
}

export const addCategory = category => {
    return(dispatch) => {
        dispatch({type: "ADD_CATEGORY"})
        fetch('http://localhost:3001/categories', {
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

export const addNonprofit = nonprofit => {
    return(dispatch) => {
        dispatch({type: "ADD_NONPROFIT"})
        fetch('http://localhost:3001/categories', {
            method: 'POST',
            body: JSON.stringify(nonprofit),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(nonprofit => dispatch({type: "NONPROFIT_ADDED", payload: nonprofit}))
    }
}