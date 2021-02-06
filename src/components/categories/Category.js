import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import NonprofitForm from '../../containers/NonprofitForm'

class Category extends Component {

    render(){
        
        const category = this.props.categories.find(c => `${c.id}` === this.props.match.params.category_id)
        const npList = category.nonprofits.map(np => <li key={np.id}><Link to={`nonprofits/${np.id}`}>{np.name}</Link></li>)

        return(
            <div>
                <div className="container">
                   <h2>{category.name}</h2> 
                </div>   
                <hr/>
                <ul>
                    {npList}
                </ul>
                <hr/>
                <h3>Add a new nonprofit</h3>
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