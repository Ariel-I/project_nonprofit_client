import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNonprofit} from '../actions/nonprofits'

class NonprofitForm extends Component {

    state = {
        nonprofit: {
            name: "",
            location: "",
            description: "",
            contact_info: "",
            link: ""
        },
        loading: false
    }

    handleOnChange = event => {
        this.setState({...this.state,
            nonprofit: {
                ...this.state.nonprofit,
                name: event.target.value,
                location: event.target.value,
                description: event.target.value,
                contact_info: event.target.value,
                link: event.target.value
            }
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" onChange={} value={} />
                    <button type="submit">Add Nonprofit</button>
                </form>
            </div>
        )
    }
}


export default NonprofitForm