import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import Footer from './Footer'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                productName: '',
                category: '',
                productDescription: '',
                productImage: '',
            },
            errors: {
                productName: "",
                category: "",
                productDescription: "",
                productImage: ''
            }
        }


        this.cancelProcess = this.cancelProcess.bind(this)


    }
    handleValidation() {
        let product = this.state.product;
        let errors = {};
        let formIsValid = true;


        if (!product["productName"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["productName"] = "Product Name should contain only letters";
        }
        else {
            errors["productName"] = "";
        }


        if (!product["category"].match(/^[a-zA-Z\s]+$/)) {
            formIsValid = false;
            errors["category"] = "Product Category should contain only letters";
        }
        else {
            errors["category"] = "";
        }

        this.setState({ errors: errors });
        return formIsValid;


    }

    changeHandler(field, event) {
        let product = this.state.product;
        product[field] = event.target.value;
        this.setState({ product });
    }
    addProduct(event) {
        event.preventDefault();
        let product = {
            productName: this.state.product.productName,
            category: this.state.product.category,
            productDescription: this.state.product.productDescription,
            productImage: this.state.product.productImage,
            seller: {
                userId: this.props.location.state.userId
            }
        }

        if (this.handleValidation()) {
            console.log(product)
            ProductService.addProduct(product)
                .then(response => {
                    console.log(response)
                    window.alert("Product added successfully! The product Id is : " + response.data.productId);
                    window.location.reload()
                })

                .catch(error => {
                    console.log(error.response)
                    window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
                    window.location.reload()

                })
        } else {
            console.log(this.state.errors)
            alert("Form has errors. Please enter the correct information.");

        }


    }

    cancelProcess = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <div className="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
                    <div className="card col-9">
                        <br />
                        <h3 className="text-center">Add Product</h3>
                        <div className="card-body">
                            <form onSubmit={this.addProduct.bind(this)}>
                                <div className="form-group" >
                                    <label htmlFor="productName">Product Name: </label>
                                    <input type="text" name="productName" class="form-control"
                                        placeholder="Product Name " value={this.state.product["productName"]} onChange={this.changeHandler.bind(this, "productName")} required />
                                    <span className="error">{this.state.errors["productName"]}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category: </label>
                                    <input type="text" name="category" class="form-control"
                                        placeholder="Product Category " value={this.state.product["category"]} onChange={this.changeHandler.bind(this, "category")} required />
                                    <span className="error">{this.state.errors["category"]}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="productDescription">Product Description: </label>
                                    <input type="text" name="productDescription" class="form-control"
                                        placeholder="Product Description " value={this.state.product["productDescription"]} onChange={this.changeHandler.bind(this, "productDescription")} required />
                                    <span className="error">{this.state.errors["productDescription"]}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="productImage">Product Image URL: </label>
                                    <input type="text" name="productImage" class="form-control"
                                        placeholder="Image URL" value={this.state.product["productImage"]} onChange={this.changeHandler.bind(this, "productImage")} required />
                                    <span className="error">{this.state.errors["productImage"]}</span>
                                </div>
                                <button className="btn btn-success" type="submit">Add Product</button>
                                <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => this.cancelProcess()}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer />
            </div>
        )
    }
}

export default AddProduct