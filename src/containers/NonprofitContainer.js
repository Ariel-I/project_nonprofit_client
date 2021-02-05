import React, {Component} from 'react'
import {connect} from 'react-redux'
import NonprofitList from '../components/nonprofits/NonprofitList'

class NonProfit extends Component {


    render(){

        return(
            <div className="container">
                <NonprofitList />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        nonprofits: state.categoryReducer.nonprofits,
    }
}

export default connect(mapStateToProps)(NonProfit)