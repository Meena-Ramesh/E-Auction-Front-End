import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Footer from './Footer'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: this.props.location.state.productName,
            category: this.props.location.state.category,
            productDescription: this.props.location.state.productDescription
        }

        this.updateProduct = this.updateProduct.bind(this)
        this.cancelProcess = this.cancelProcess.bind(this)
        
    }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    updateProduct = () => {
        let product = {
            productId: this.props.location.state.productId,
            productName: this.state.productName,
            category: this.state.category,
            productDescription: this.state.productDescription,
        }

        ProductService.updateProduct(product)
        .then(response => {
            console.log(response)
            window.alert("Product updated successfully!");
            window.location.reload()
        })
        .catch(error => {
            console.log(error.response)
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            window.location.reload()
        })
    }

    cancelProcess = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
               <Header/>
               <br />  <br />  <br /> <br />
               <div className="row">
               <SellerSideBar userId={this.props.location.state.userId} />
               <div className="card col-9">
               <br/>
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name: </label>
                                        <input type="text" name="productName" class="form-control"
                                            placeholder="Product Name " value={this.state.productName} onChange={this.changeHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Category: </label>
                                        <input type="text" name="category" class="form-control"
                                            placeholder="Product Category " value={this.state.category} onChange={this.changeHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDescription">Product Description: </label>
                                        <input type="text" name="productDescription" class="form-control"
                                            placeholder="Product Description " value={this.state.productDescription} onChange={this.changeHandler} required />
                                    </div>
                                    <button className="btn btn-success" onClick={() => this.updateProduct()}>Update Product</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => this.cancelProcess()}>Cancel</button>
                                </form>
                            </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default UpdateProduct



