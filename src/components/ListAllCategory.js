import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import BuyerSideBar from './BuyerSideBar'
import Header from './Header'

class ListAllCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
        this.viewAllProduct = this.viewAllProduct.bind(this)
    }

    componentDidMount() {
        ProductService.getAllCategory()
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => {
                console.log(error.response)
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    viewAllProduct = (category) => {
        this.props.history.push({
            pathname: '/buyer/category/products',
            state: {
                userId: this.props.location.state.userId,
                category: category
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <h3 className="text-center">
                    Category List
                    <small className="text-muted">  (All categories in the system)</small>
                </h3>
                <br />
                <div className="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.categories.map(category =>
                                    <tr>
                                        <td>{category}</td>
                                        <td><button className="btn btn-info" style={{ marginLeft: "20px" }} onClick={ () => this.viewAllProduct(category)}>View Products</button></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListAllCategory
