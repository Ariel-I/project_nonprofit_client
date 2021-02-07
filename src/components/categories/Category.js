import React, {Component} from 'react'
import { connect } from 'react-redux'
import CategoryShow from './CategoryShow'

class Category extends Component {

    render(){
        
        const category = this.props.categories.find(c => `${c.id}` === this.props.match.params.category_id)
        const npList = category.nonprofits.map(np => <CategoryShow key={np.id} nonprofit={np}/>)
            
        return(
            <div>
                <div className="container">
                   <h2>{category.name}</h2> 
                </div>   
                <hr/>
                <ul>
                    {npList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
    }
}

export default connect(mapStateToProps)(Category)