import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNonprofits} from '../actions/nonprofits'
//import NonprofitForm from ''

class NonProfit extends Component {

    componentDidMount(){
        this.props.getNonprofits()
    }

    render(){

        const nonprofitCards = this.props.nonprofits.map(np => <li key={np.id}>{np.name}</li>)

        return(
            <div>
                <ul>
                    {nonprofitCards}
                </ul>
             
            </div>
        )
    }

}

const mapStateToProps = state => {
    //console.log("I am state", state)
    return {
        nonprofits: state.nonprofitReducer.nonprofits,
        loading: state.nonprofitReducer.loading
    }
}

export default connect(mapStateToProps, {getNonprofits})(NonProfit)