export const getNonprofits = () => {
    return(dispatch) => {
        dispatch({type: "LOADING_NONPROFITS"})
        fetch('/nonprofits')
        .then(resp => resp.json())
        .then(nonprofits => dispatch({type: "FETCH_NONPROFITS", payload: nonprofits}))
    }
}