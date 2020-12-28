/* 




<table className="table table-striped table-bordered col-9">

<thead>
    <tr>
        <th> Product ID</th>
        <th> Seller ID</th>
        <th> Product Name</th>
        <th> Product Category</th>
        <th> Product Description</th>
         <th> Actions</th> 
    </tr>
</thead>
<tbody>
    {
        this.state.products.map(
            product =>
                <tr key={product.productId}>
                    <td>  {product.productId} </td>
                    <td>  {product.seller.userId}</td>
                    <td> {product.productName} </td>
                    <td> {product.category}</td>
                    <td> {product.productDescription}</td>
                     <td>
                     <button onClick={ () => this.editproduct(product.id)} className="btn btn-info">Update </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => this.deleteproduct(product.id)} className="btn btn-danger">Delete </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => this.viewproduct(product.id)} className="btn btn-info">View </button>
                 </td> 
                </tr>
        )
    }
</tbody>
</table> */






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
                        <button onClick={ () => this.editproduct(product.product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteproduct(product.product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={() => this.viewProduct(product.productId)} className="btn btn-info">View </button>
                    </div>
                </div>
            )
        })
}
</div>