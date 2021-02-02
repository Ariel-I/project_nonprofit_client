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

    handleOnSubmit = event => {
        event.preventDeafult();
        const nonprofit = {...this.state.nonprofit, categoryId: this.props.categoryId}
        console.log(nonprofit)
        this.props.addNonprofit(nonprofit)
        this.setState({
            nonprofit: {
                name: "",
                location: "",
                description: "",
                contact_info: "",
                link: ""
            },
            loading: false
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleOnChange} value={this.state.nonprofit.name} />
                    <input type="text" onChange={this.handleOnChange} value={this.state.nonprofit.location} />
                    <input type="text" onChange={this.handleOnChange} value={this.state.nonprofit.description} />
                    <input type="text" onChange={this.handleOnChange} value={this.state.nonprofit.contact_info} />
                    <input type="text" onChange={this.handleOnChange} value={this.state.nonprofit.link} />

                    <button type="submit">Add Nonprofit</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addNonprofit})(NonprofitForm)