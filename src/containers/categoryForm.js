import React, {Component} from 'react'
import {addCategory} from '../actions/categories'
import {connect} from 'react-redux'

class CategoryForm extends Component {
    
    state = {
        category: {
            name: ""
        },
        loading: false
    }


    handleOnChange = event => {
        this.setState({...this.state,
            category: {
                ...this.state.category,
                name: event.target.value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const category = {...this.state.category}
        console.log(category)
        this.props.addCategory(category)
        this.setState({
            category: {
                name: ""
            }
            loading: false
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Category Name: </label>
                    <input 
                        type="text" 
                        onChange={this.handleOnChange} 
                        value={this.state.category.name} 
                    />
                    <br/><br/>
                    <button type="submit">Add Category</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCategory})(CategoryForm)