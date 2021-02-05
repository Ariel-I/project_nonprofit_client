import React, {Component} from 'react'
import { connect } from 'react-redux'
import NonprofitForm from '../../containers/NonprofitForm'
import Nonprofit from '../nonprofits/Nonprofit'

class Category extends Component {

    render(){
        
        const category = this.props.categories.find(c => `${c.id}` === this.props.match.params.id)
        const npList = category.nonprofits.map(np => <Nonprofit key={np.id} nonprofit={np}/>)

        return(
            <div>
                <div className="container">
                   <h2>Category: {category.name}</h2> 
                </div>   
                <hr/>
                <ul>
                    <li>
                        <h3>{npList}</h3>
                    </li>
                    
                </ul>
                
                <h4>Add A New Nonprofit: </h4>
                <NonprofitForm category_id={category.id}/>
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