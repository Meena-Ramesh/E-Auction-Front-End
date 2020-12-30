import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Footer from './Footer'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class ListAllProductForSeller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductService.getApprovedProduct()
            .then(response => {
                this.setState({ products: response.data }
                )
            })
            .catch(error => {
                    window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <h3 className="text-center">
                    Product List
                    <small className="text-muted">  (All products in the system)</small>
                </h3>
                <br />
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
                                                <h4 className="card-title">{product.productName}</h4>
                                                <p className="card-text">{product.productDescription}</p>
                                                <p className="card-text">Category : {product.category}</p>
                                                <p className="card-text">Seller ID: {product.seller.userId} </p>
                                                {
                                                    product.auction ? <p className="card-text"><strong>AUCTIONID -</strong> {product.auction.auctionId} </p>
                                                    : <p className="card-text">NOT IN AUCTION YET</p>
                                                }
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

export default ListAllProductForSeller