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
            link: "",
            category_id: this.props.categoryId
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

    handleSelect = event => {
        this.setState({
            ...this.state,
            nonprofit: {
                ...this.state.nonprofit,
                category_id: this.props.categoryId || event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const nonprofit = {...this.state.nonprofit}
        console.log(nonprofit)
        this.props.addNonprofit(nonprofit)
        this.setState({
            nonprofit: {
                name: "",
                location: "",
                description: "",
                contact_info: "",
                link: "", 
                category_id: this.categoryId
            },
            loading: false
        })
    }


    render(){

        const selectCategory = this.props.categories.map( c => {
            return (
                <option key={c.id} value={c.id}>{c.name}</option>
            )
        })

        return(
            <div className="container">
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label>
                        Choose a Category: 
                        <select id="categories" value={this.props.categoryId} onChange={this.handleSelect} >
                            {selectCategory}
                        </select>
                    </label>
                    <br/><br/>


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

const mapStateToProps = state => {
    return{
        categories: state.categoryReducer.categories
    }
}


export default connect(mapStateToProps, {addNonprofit})(NonprofitForm)