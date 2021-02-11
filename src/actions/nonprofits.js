export const getNonprofits = () => {
    return(dispatch) => {
        dispatch({type: "LOADING_NONPROFITS"})
        fetch('http://localhost:3001/nonprofits')
        .then(resp => resp.json())
        .then(nonprofits => dispatch({type: "FETCH_NONPROFITS", payload: nonprofits}))
    }
}

// export const addNonprofit = nonprofit => {
//     return(dispatch) => {
//         dispatch({type: "ADD_NONPROFIT"})
//         fetch('http://localhost:3001/nonprofits', {
//             method: 'POST',
//             body: JSON.stringify(nonprofit),
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         }) 
//         .then(resp => resp.json())
//         .then(np => dispatch({type: "NONPROFIT_ADDED", payload: np}))
//     }
// }