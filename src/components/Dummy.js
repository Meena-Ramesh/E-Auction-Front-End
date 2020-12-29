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






{/* <div className="card-columns col-9">
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
</div> */}


{/* <div>
               <Header/>
               <br />  <br />  <br />
               <div className="row">
               <div className="card col-9">
               <br/>
                            <h3 className="text-center">Welcome!!!</h3>
                            <h4 className="text-center">Login to continue</h4>
                            <div className="card-body">
                            <form>
                        <div className="form-group">
                            <label>UserId</label>
                            <input type="text" className="form-control" name="userId" value={userId} pattern="[0-9]{1,}" onChange={this.changeHandler} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.changeHandler} required />
                        </div>
                        <h6>Sign In As :</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="SELLER" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                SELLER
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="BUYER" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                BUYER
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="ADMIN" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                ADMIN
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.loginUser}> LOGIN</button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.registerUser()} className="btn btn-info">REGISTER </button>
                    </form>
                            </div>
                        </div>
                </div>
            </div> */}


{/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">

      <div className="item active">
        <img src="/product_images/candles.jpg" alt="Los Angeles" style="width:100%;"/>
        <div className="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>

      <div className="item">
        <img src="/product_images/planter_box.jpg" alt="Chicago" style="width:100%;"/>
        <div className="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
    
      <div className="item">
        <img src="/product_images/ceramic_plate.jpg" alt="New York" style="width:100%;"/>
        <div className="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div> */}



{/* <Carousel className="col-9">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/product_images/candles.jpg/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/product_images/planter_box.jpg/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/product_images/ceramic_plate.jpg/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

/* import React, { Component } from 'react'
import BidService from '../service/BidService'
import BuyerSideBar from './BuyerSideBar'
import Header from './Header'

class ListBidsForBuyer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bids: [],
             bidPrice : ''
        }

        this.addBid = this.addBidHandler.bind(this)
        this.removeAllBid = this.removeAllBidHandler.bind(this)
    }
    
    componentDidMount() {
        BidService.getAllBidsByAuction(this.props.location.state.auctionId)
        .then(response => {
            console.log(response.data)
            this.setState({
                bids: response.data
            })
        })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addBidHandler() {
        const bid = {
            bidPrice: this.state.bidPrice,
            auction: {
                auctionId: this.props.location.state.auctionId
            },
            buyer: {
                userId: this.props.location.state.userId
            } 
        }
        BidService.createBid(bid)
        .then(response => {
            window.alert("Bid created successfully with ID " +response.data.bidId)
            window.location.reload()
        })
        .catch(error => {
            console.log(error.response)
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
        })
    }

    removeAllBidHandler() {
        BidService.removeAllBids(this.props.location.state.userId, this.props.location.state.auctionId)
        .then(response => {
            window.alert(response.data)
            window.location.reload()
        })
        .catch(error => {
            console.log(error.response)
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
        })
    }

    render() {
        console.log('In render');
        return (
            <div>
                <Header />
                <br />  <br />  <br />
                <h3 className="text-center">
                    Bid List
                    <small className="text-muted">  (All bids for auction {this.props.location.state.auctionId})</small>
                </h3>
                <br />
                <label>Enter Bid Price  </label>
                <input type="text" name="bidPrice" style={{marginLeft:"20px"}} value={this.state.bidPrice} onChange={this.changeHandler}/>
                <button className="btn btn-primary" style={{marginLeft:"20px"}} onClick={this.addBid}>Add bid</button>
                <button className="btn btn-danger" style={{marginLeft:"20px"}} onClick={this.removeAllBid}>Delete All bids</button>
                <div class="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Bid ID</th>
                                <th>Bid Price</th>
                                <th>Auction Id</th>
                                <th>Maximum BidPrice</th>
                                <th>Buyer Id</th>
                                <th>Buyer Name</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.bids.map( bid =>
                                <tr key={bid.bidId}>
                                    <td>{bid.bidId}</td>
                                    <td>{bid.bidPrice}</td>
                                    <td>{bid.auction.auctionId}</td>
                                    <td>{bid.auction.maxBidPrice}</td>
                                    <td>{bid.buyer.userId}</td>
                                    <td>{bid.buyer.firstName}</td>
                                </tr> ) }
                        </tbody>
                    </table>
                </div>
                </div>
        )
    }
}

export default ListBidsForBuyer
 */

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import UserService from '../service/UserService';
import AdminSideBar from './AdminSideBar';
import Header from './Header';

class ListAllUserForAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            users: [],
            orgData: [],
            perPage: 5,
            currentPage: 0

        }
        this.viewUser = this.viewUser.bind(this)
        this.clickPageHandler = this.clickPageHandler.bind(this)
    }
    clickPageHandler = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData();
        })
    }

    loadMoreData = () => {
        const data = this.state.orgData
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState(
            {
                pageCount: Math.ceil(data.length / this.state.perPage),
                users: slice
            })

    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        UserService.getAllUser()
        .then(response => {
                const data = response.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState(
                    {
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgData: response.data,
                        users: slice
                    }
                )
            })
        .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    viewUser = (profileId) => {
        this.props.history.push({
            pathname: '/admin/user/profile',
            state: {
            profileId: profileId,
            userId: this.props.location.state.userId
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br/>
                <h3 className="text-center">
                    User List
                    <small className="text-muted">  (All Users in the system)</small>
                </h3>
                <br />
                <div class="row">
                    <AdminSideBar userId={this.props.location.state.userId} />
                    <div className="container col-9">
                    <div className="container">
                        <ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                        pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                        containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th> User ID</th>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> User Type</th>
                                <th> Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                     this.state.users.map(
                                        user =>
                                            <tr key={user.userId}>
                                                <td>  {user.userId} </td>
                                                <td>  {user.firstName}</td>
                                                <td>  {user.lastName}</td>
                                                <td>  {user.userType} </td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.userId)} className="btn btn-info">View</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListAllUserForAdmin