import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import {addNonprofit} from '../actions/nonprofits'

class NonprofitForm extends Component {

    state = {
        nonprofit: {
            name: "",
            location: "",
            description: "",
            contact_info: "",
            link: "",
            image: "",
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
        event.preventDeafult();
        const nonprofit = {...this.state.nonprofit}
        this.props.addCategory(nonprofit)
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

        const selectCategory = this.props.categories.map( (category, i) => {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        })

        return(
            <div className="container">
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

                    <label>Choose a Category: </label>
                    <select id="categories" value={this.props.categoryId} onChange={this.handleSelect}>
                        {selectCategory}
                    </select>
                    <br/>

                    
                    <button type="submit">Add Nonprofit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories
    }
}

export default connect(mapStateToProps, {getCategories, addNonprofit})(NonprofitForm)