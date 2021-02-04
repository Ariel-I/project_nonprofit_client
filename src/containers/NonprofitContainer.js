import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNonprofits} from '../actions/nonprofits'
//import Nonprofits from '../components/nonprofits/Nonprofits'
//import NonprofitForm from './NonprofitForm'

class NonProfit extends Component {

    componentDidMount(){
        this.props.getNonprofits()
    }

    render(){

        const npCards = this.props.nonprofits.map(np =>
          <div className="card-group">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-header" key={np.id}>{np.name}</div>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <hr/>
                <div className="card-body">
                    <p className="card-text" key={np.id}>{np.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted" key={np.id}>Location: {np.location}</small>
                </div>
            </div>
          </div>
        )

        return(
            <div className="container">
                {npCards}
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