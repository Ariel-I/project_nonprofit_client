import React, {Component} from 'react'

class categoryForm extends Component {
    
    state = {
        catgory: {
            name: ""
        }
        loading: false
    }


    handleOnChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const category = {...this.state.catgory}
        console.log(category)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text" name="name" 
                        onChange={this.handleOnChange} 
                        value={this.state.catgory.name} 
                    />
                    <button type="submit">Add Category</button>
                </form>
            </div>
        )
    }
}

export default categoryForm