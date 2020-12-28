import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class ListMyProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.viewProduct = this.viewProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        this.deleteproduct = this.deleteproduct.bind(this)
    }

    componentDidMount() {
        ProductService.getProductsOwnedByUser(this.props.location.state.userId)
            .then(response => {
                this.setState({ products: response.data }
                )
            })
            .catch(error => {
                window.alert(error.response.status +  " " + error.response.data)
            })
    }

    viewProduct = (productId) => {
        this.props.history.push({
            pathname: '/seller/view/product',
            state: {
                userId: this.props.location.state.userId,
                productId: productId
            }
        })
    }

    editProduct = (productId) => {

    }

    deleteproduct = (productId) => {

    }


    render() {
        const { history } = this.props
        return (
            <div>
                <Header />
                <br />

                <h3 className="text-center">
                    Product List
                    <small className="text-muted">  (My Products)</small>
                </h3>
                <br />

                <button className="btn btn-secondary btn-block" onClick={this.addProduct}> Add Product</button>

                <div className="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
                    <div className="card-columns col-9">
                        {
                            this.state.products.map(
                                product => {
                                    return (
                                        <div className="card bg-light">
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{product.productName}</h4>
                                                <p className="card-text">{product.productDescription}</p>
                                                <p className="card-text">Category : {product.category}</p>
                                                <p className="card-text">Review : {product.reviewStatus}</p>
                                                <button onClick={() => this.editproduct(product.product.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteproduct(product.product.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewProduct(product.productId)} className="btn btn-info">View </button>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>

                </div>
                <br />
            </div>
        )
    }
}

export default ListMyProducts
