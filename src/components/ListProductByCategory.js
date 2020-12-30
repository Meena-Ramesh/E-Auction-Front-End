import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import BuyerSideBar from './BuyerSideBar'
import Footer from './Footer'
import Header from './Header'

export class ListProductByCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: []
        }

        this.viewProduct = this.viewProduct.bind(this)
    }

    componentDidMount() {
        ProductService.getProductsByCategory(this.props.location.state.category)
        .then(response => {
            this.setState({
                products: response.data
            })
        })
        .catch(error => {
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
        })
    }

    viewProduct = (productId) => {
        this.props.history.push({
            pathname: '/buyer/product',
            state: {
                userId: this.props.location.state.userId,
                productId: productId
            }
        })
    }

    render() {
        return (
            <div>
                 <Header />
                 <br />  <br />  <br /> <br />
                <h3 className="text-center">
                    Product List
                    <small className="text-muted">  (All products in the category - {this.props.location.state.category} )</small>
                </h3>
                <br />
                <div className="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
                    <div className="card-columns col-9">
                        {
                            this.state.products.map(
                                product => {
                                    return (
                                        <div className="card bg-light" key={product.productId}>
                                            <img className="card-img-top" src={product.productImage} alt="Card image"></img>
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{product.productName}</h4>
                                                <p className="card-text">{product.productDescription}</p>
                                                <p className="card-text">Category : {product.category}</p>
                                                {
                                                    product.auction ? <p className="card-text"><strong>AUCTIONID -</strong> {product.auction.auctionId} </p>
                                                    : <p className="card-text">NOT IN AUCTION YET</p>
                                                }
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

export default ListProductByCategory
