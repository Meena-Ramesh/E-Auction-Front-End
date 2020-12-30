import { th } from 'date-fns/locale'
import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Footer from './Footer'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class ListMyProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.viewProduct = this.viewProduct.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
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

    addProduct = () => {
        this.props.history.push({
            pathname: '/seller/product/add',
            state: {
                userId: this.props.location.state.userId
            }
        })
    }

    editProduct = (product) => {
        this.props.history.push({
            pathname: '/seller/product/update',
            state: {
                userId: this.props.location.state.userId,
                productId: product.productId,
                productName: product.productName,
                category: product.category,
                productDescription: product.productDescription
            }
        })
    }

    deleteProduct = (productId) => {
        ProductService.deleteProduct(productId)
        .then(() => {
            window.alert("Product deleted successfully!!")
            window.location.reload()
        })
        .catch(error => {
            console.log(error.response)
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            window.location.reload()
        })
    }


    render() {
        const { history } = this.props
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <h3 className="text-center sticky-top">
                    Product List
                    <small className="text-muted">  (My Products)</small>
                </h3>
                <br />

                <button className="btn btn-success btn-block" onClick={() => this.addProduct()}> Add Product</button>

                <div className="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
                    <div className="card-columns col-9">
                        {
                            this.state.products.map(
                                product => {
                                    return (
                                        <div className="card bg-light">
                                            <img className="card-img-top" src={product.productImage} alt="Card image"></img>
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{product.productName}</h4>
                                                <p className="card-text">{product.productDescription}</p>
                                                <p className="card-text">Category : {product.category}</p>
                                                <p className="card-text">Review : {product.reviewStatus}</p>
                                                {
                                                    product.auction ? <p className="card-text"><strong>AUCTIONID -</strong> {product.auction.auctionId} </p>
                                                    : <p className="card-text">NOT IN AUCTION YET</p>
                                                }
                                                <button onClick={() => this.editProduct(product)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteProduct(product.productId)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewProduct(product.productId)} className="btn btn-info">View </button>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>

                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}

export default ListMyProducts
