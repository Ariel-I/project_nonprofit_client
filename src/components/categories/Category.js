import React, {Component} from 'react'
import { connect } from 'react-redux'
import NonprofitForm from '../../containers/NonprofitForm'
import {Link} from 'react-router-dom'

class Category extends Component {

    render(){
        const id = this.props.match.params.id

        const category = this.props.categories.filter(c => c.id === parseInt(id))
        
        let categoryNonprofits = category.map(cat => {
            return(
                <div key={cat.id}>
                    <h3 >Category: {cat.name}</h3>
                    {
                        cat.nonprofits.map(np =>{
                            return(
                                <div className="card-group" key={np.id}>
                                  <div className="card" style={{width: '18rem'}}>
                                    <div className="card-header" >
                                        <Link to={`/categories/${np.category_id}/nonprofits/${np.id}`}>{np.name}</Link>
                                    </div>
                                    <img className="card-img-top" src="..." alt="Card image cap" />
                                    <hr/>
                                    <div className="card-body">
                                        <p className="card-text">{np.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Location: {np.location}</small>
                                    </div>
                                  </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
        //console.log(category, "i am c")
        
        return(
            <div>
                {categoryNonprofits}
                <hr/>
                <h4>Add A New Nonprofit: </h4>
                <NonprofitForm/>
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