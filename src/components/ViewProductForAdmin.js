import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import AdminSideBar from './AdminSideBar'
import Footer from './Footer'
import Header from './Header'

class ViewProductForAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {}
        }
        this.viewProduct = this.reviewProduct.bind(this)
    }

    reviewProduct = (productId, status) => {
        ProductService.reviewProduct(productId, status)
        .then(response => {
            window.alert(response.data.productId + " : " + response.data.reviewStatus);
            this.props.history.push({
                pathname: '/product/review',
                state : {
                    userId: this.props.location.state.userId,
                }
            })
        })
        .catch(error => {
            window.alert(error.response.status +  " " + error.response.data.errorMessage)
        })
    }

    componentDidMount() {
        console.log(this.props.location.state.productId)
        ProductService.getProductById(this.props.location.state.productId)
            .then(response => {
                console.log(response.data)
                this.setState({
                    product: response.data
                })
            })
            .catch(error => {
                window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            })
    }
    render() {
        if (!this.state.product.seller) {
            return null;
        }
        console.log(this.state.product)
        const { product } = this.state
        const { seller } = this.state.product
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <div className="row">
                    <AdminSideBar userId={this.props.location.state.userId} />
                    <div className="card-body">
                        <h6>Product Details</h6>
                        <hr />
                        <pre>Product ID      : {product.productId} <br />
                             Category        : {product.category}  <br />
                             Description     : {product.productDescription} <br />
                             Approval Status : {product.reviewStatus}
                        </pre>
                        <hr />
                        <h6>Seller Details</h6>
                        <hr />
                        <h6>Personal Details</h6>
                        <hr />
                        <pre>Seller ID       : {seller.userId} <br />
                             Seller Name     : {seller.firstName} {seller.lastName} <br />
                             Email           : {seller.email} <br />
                             Aadhar Number   : {seller.aadharNumber} <br />
                             Contact Number  : {seller.contactNumber} <br />
                        </pre>
                        <h6>Address</h6>
                        <hr />
                        <pre>Door Number     : {seller.address.doorNumber} <br />
                             Building Name   : {seller.address.buildingName} <br />
                             Street Name     : {seller.address.streetName} <br />
                             Locality        : {seller.address.locality} <br />
                             City            : {seller.address.city} <br />
                             State           : {seller.address.state} <br />
                             Country         : {seller.address.country} <br />
                             ZIP             : {seller.address.zip} <br />
                        </pre>
                        <button onClick={() => this.reviewProduct(product.productId, "approve")} className="btn btn-success">APRROVE</button>
                        <button onClick={() => this.reviewProduct(product.productId, "reject")} className="btn btn-danger" style={{ marginLeft: "10px" }}>REJECT</button>
                    </div>
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}

export default ViewProductForAdmin
