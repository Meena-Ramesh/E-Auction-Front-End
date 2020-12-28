import React, { Component } from 'react'
import ProductService from '../service/ProductService'
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
                window.alert(error.response.status + " " + error.response.data)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <h3 className="text-center">
                    Product List
                    <small className="text-muted">  (All products in the system)</small>
                </h3>
                <br />
                {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div> */}
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
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>


                </div>
            </div>
        )
    }
}

export default ListAllProductForSeller