import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            category: '',
            productDescription: ''
        }

        this.addProduct = this.addProduct.bind(this)
        this.cancelProcess = this.cancelProcess.bind(this)
        
    }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    addProduct = () => {
        let product = {
            productName: this.state.productName,
            category: this.state.category,
            productDescription: this.state.productDescription,
            seller : {
                userId: this.props.location.state.userId
            }
        }

        ProductService.addProduct(product)
        .then(response => {
            console.log(response)
            window.alert("Product added successfully! The product Id is : " + response.data.productId);
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
               <div className="row">
               <SellerSideBar userId={this.props.location.state.userId} />
               <div className="card col-9">
               <br/>
                            <h3 className="text-center">Add Product</h3>
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
                                            placeholder="productDescription " value={this.state.productDescription} onChange={this.changeHandler} required />
                                    </div>
                                    <button className="btn btn-success" onClick={() => this.addProduct()}>Add Product</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => this.cancelProcess()}>Cancel</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default AddProduct


