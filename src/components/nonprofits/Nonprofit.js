import React, {Component} from 'react'
import {connect} from 'react-redux'
import NonprofitContainer from '../../containers/NonprofitContainer'

const Nonprofit = ({name, location }) => {

        //const id = this.props.match.params.id 
        
       // let showNonprofit = this.props.categories.find(np => np. )
        //console.log(showNonprofit)

        //let y = this.props.categories.filter(c => c.id === parseInt(id))

        // let x = y.map(c => {
        //     return(
        //         <div key={c.id}>
        //             {
        //                 c.nonprofits.map(np => {
        //                     return(
        //                         <h2 key={np.category_id}>{np.name}</h2>
        //                     )
        //                 })
        //             }
        //         </div>
        //     )
        // })

        //let nonprofits = props.nonprofits.filter(c => c.id === props.match.params.id)[0]
        
        //console.log(np)

    return(
        <div >
            <p>render specific nonprofit page here </p>
            {name}
        </div>    
    )    
        
    
}



export default Nonprofit