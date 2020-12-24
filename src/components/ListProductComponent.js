import React, { Component } from 'react'
import ProductService from '../service/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: []
        }
    }

    componentDidMount() {
        ProductService.getApprovedProduct()
        .then(response => {
            this.setState({products: response.data})
        })
    }
    
    render() {
        return (
            <div>
                <div>
                 <h2 className="text-center">Products List</h2>
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product ID</th>
                                    <th> Product Name</th>
                                    <th> Product Category</th>
                                    <th> Product Description</th>
                                    {/* <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.productId}>
                                            <td>  {product.productId} </td>
                                             <td> { product.productName} </td>   
                                             <td> {product.category}</td>
                                             <td> {product.productDescription}</td>
                                             {/* <td>
                                                 <button onClick={ () => this.editproduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteproduct(product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewproduct(product.id)} className="btn btn-info">View </button>
                                             </td> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            </div>
        )
    }
}

export default ListProductComponent