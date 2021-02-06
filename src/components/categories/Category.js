import React, {Component} from 'react'
import { connect } from 'react-redux'
import NonprofitForm from '../../containers/NonprofitForm'
import {Link} from 'react-router-dom'

class Category extends Component {

    render(){
        
        const category = this.props.categories.find(c => `${c.id}` === this.props.match.params.category_id)
        const npList = category.nonprofits.map(np => <li key={np.id}><Link to={`nonprofits/${np.id}`}>{np.name}</Link></li>)

        return(
            <div>
                <div className="container">
                   <h2>Category: {category.name}</h2> 
                </div>   
                <hr/>
                <ul>
                    <li>
                        {npList}
                    </li>
                    
                </ul>
                <hr/>
                <h4>Add A New Nonprofit: </h4>
                <NonprofitForm category_id={category.id}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        nonprofits: state.categoryReducer.nonprofits
    }
}

export default connect(mapStateToProps)(Category)