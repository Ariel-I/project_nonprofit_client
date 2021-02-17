import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNonprofits} from '../actions/nonprofits'
import NonprofitList from '../components/nonprofits/NonprofitList'
import NonprofitForm from './NonprofitForm'

class NonProfitContainer extends Component {

    sortOriginal = () => {
        let originalList = this.props.nonprofits.sort((a,b) => a.id > b.id ? 1 : -1)
        this.setState({nonprofits: originalList})
    }

    sortAsc = () => {
        let sortedAsc = this.props.nonprofits.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ nonprofits: sortedAsc })
    }

    sortDesc = () => {
        let sortedDesc = this.props.nonprofits.sort((a, b) => b.name.localeCompare(a.name))
        this.setState({ nonprofits: sortedDesc })
    }


    render(){
    
        return(
            <div className="container">
                <button onClick={this.sortOriginal}>Sort Original</button>
                <button onClick={this.sortAsc}>Sort A-Z</button>
                <button onClick={this.sortDesc}>Sort Z-A</button>
                <hr/>
                {this.props.nonprofits.map(np => <NonprofitList key={np.id} nonprofit={np}/>)}
                <hr/>
                <h3>Add A New Nonprofit:</h3><br/>
                <NonprofitForm />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        nonprofits: state.nonprofitReducer.nonprofits,
    }
}

export default connect(mapStateToProps,{getNonprofits})(NonProfitContainer)