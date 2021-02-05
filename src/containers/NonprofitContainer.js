import React, {Component} from 'react'
import {connect} from 'react-redux'
import NonprofitList from '../components/nonprofits/NonprofitList'
import {getNonprofits} from '../actions/nonprofits'

class NonProfit extends Component {

    componentDidMount(){
        this.props.getNonprofits()
    }

    render(){

        // const nonprofits = this.props.nonprofits.map( nonp => {
        //     return(
        //         <NonprofitList key={nonp.id} nonprofit={nonp}/>
        //     )
        // })

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

export default connect(mapStateToProps,{getNonprofits})(NonProfit)