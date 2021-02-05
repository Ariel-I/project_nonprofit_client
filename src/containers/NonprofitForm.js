import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {addNonprofit} from '../actions/nonprofits'
import {addCategoryNonprofit} from '../actions/categories'

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
                [event.target.name]: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDeafult();
        const nonprofit = {...this.state.nonprofit, category_id: this.props.category_id}
        console.log(nonprofit)
        this.props.addCategoryNonprofit(nonprofit)
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
                    <label>Nonprofit Name: </label>
                    <input 
                    type="text" 
                    name="name"
                    onChange={this.handleOnChange} 
                    value={this.state.nonprofit.name} />
                    <br/><br/>
                    <label>Location: </label>
                    <input 
                    type="text" 
                    name="location"
                    onChange={this.handleOnChange} 
                    value={this.state.nonprofit.location} />
                    <br/><br/>
                    <label>Description: </label>
                    <input 
                    type="text" 
                    name="description"
                    onChange={this.handleOnChange} 
                    value={this.state.nonprofit.description} />
                    <br/><br/>
                    <label>Contact Info: </label>
                    <input 
                    type="text" 
                    name="contact_info"
                    onChange={this.handleOnChange} 
                    value={this.state.nonprofit.contact_info} />
                    <br/><br/>
                    <label>Link: </label>
                    <input 
                    type="text" 
                    name="link"
                    onChange={this.handleOnChange} 
                    value={this.state.nonprofit.link} />
                    <br/><br/>
                    <button type="submit">Add Nonprofit</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addCategoryNonprofit})(NonprofitForm)