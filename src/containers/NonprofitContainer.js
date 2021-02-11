import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNonprofits} from '../actions/nonprofits'
import NonprofitList from '../components/nonprofits/NonprofitList'

class NonProfit extends Component {

    componentDidMount(){
        this.props.getNonprofits()
    }

    render(){

        const nonprofitList = this.props.nonprofits.map(np => <NonprofitList key={np.id} nonprofit={np}/>)

        return(
            <div className="container">
                {nonprofitList}
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