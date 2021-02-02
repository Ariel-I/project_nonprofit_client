export const getNonprofits = () => {
    return(dispatch) => {
        dispatch({type: "LOADING_NONPROFITS"})
        fetch('/nonprofits')
        .then(resp => resp.json())
        .then(nonprofits => dispatch({type: "FETCH_NONPROFITS", payload: nonprofits}))
    }
}

export const addNonprofit = nonprofit => {
    return(dispatch) => {
        dispatch({type: "ADD_NONPROFIT"})
        fetch('/nonprofits', {
            method: 'POST',
            body: JSON.stringify(nonprofit),
            headers:{
                'Content-Type': 'application/json'
            }
        }) 
        .then(resp => resp.json())
        .then(np => dispatch({type: "CATEGORY_ADDED", payload: np}))
    }
}