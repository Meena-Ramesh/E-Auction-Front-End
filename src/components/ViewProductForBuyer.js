import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import BuyerSideBar from './BuyerSideBar'
import Footer from './Footer'
import Header from './Header'

class ViewProductForBuyer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             product: {}
        }
        this.viewBids = this.viewBids.bind(this)
    }

    componentDidMount() {
        ProductService.getProductById(this.props.location.state.productId)
        .then(response => {
            this.setState({
                product : response.data
            })
        })
        .catch(error => {
            window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
        })
    }

    viewBids = (auctionId) => {
        this.props.history.push({
            pathname: '/buyer/product/bids',
            state: {
                auctionId: auctionId,
                userId: this.props.location.state.userId
            }
        })
    }
    
    render() {
        if (!this.state.product.seller) {
            return null;
          }
        console.log(this.state.product)
        const {product} = this.state
        const auction = product.auction
        return (
            <div>
                <Header/>
                <br />  <br />  <br /> <br />
                <div class="row">
                    <BuyerSideBar userId= {this.props.location.state.userId}/>
                    <div className="card col-8" style={{padding:30}}>
                    <h5 className="card-title">{product.productName} </h5>
                    <div className="card-body">
                    <h6>Product Details</h6>
                        <hr/>
                        <pre>Product ID      : {product.productId} <br/>
                             Category        : {product.category}  <br/>
                             Description     : {product.productDescription} <br/>
                        </pre>
                        <hr/>
                       {
                            product.auction ? 
                           <React.Fragment>
                            <h6>Auction Details</h6>
                            <hr/>
                            <pre>Auction ID             : {auction.auctionId}<br/>
                                 Base Price             : <i className="fa fa-inr"></i> {auction.basePrice}<br/>
                                 Maximum Bidding Price  : <i className="fa fa-inr"></i> {auction.maxBidPrice} <br/>
                                 Auction Winner         : {auction.bidWinner}<br/>
                                 Start Date             : {auction.startDate.slice(0,10)}<br/>
                                 End Date               : {auction.endDate.slice(0,10)}
                            </pre>
                            <button className= "btn btn-info" onClick={() => this.viewBids(auction.auctionId)}>View Bids</button>
                            </React.Fragment> :
                            <pre>The product is not in auction yet!!</pre>   
                        }
                       
                    </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}

export default ViewProductForBuyer
