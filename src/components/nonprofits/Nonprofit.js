import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nonprofit extends Component {

    render(){

        const id = this.props.match.params.id 

        let y = this.props.categories.filter(c => c.id === parseInt(id))

        let x = y.map(c => {
            return(
                <div key={c.id}>
                    {
                        c.nonprofits.map(np => {
                            return(
                                <div >
                                <h2 key={np.category_id}>{np.name}</h2>
                                <p>{np.location}</p>
                                <p>{np.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })

        return (
            <div >
                <p>render nonprofit page here</p>
                {x}
            </div>    
        )    
        
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        nonprofits: state.categoryReducer.nonprofits
    }
}

export default connect(mapStateToProps)(Nonprofit)