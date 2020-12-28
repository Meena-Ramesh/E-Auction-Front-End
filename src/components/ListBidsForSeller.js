import React, { Component } from 'react'
import BidService from '../service/BidService'
import BuyerSideBar from './BuyerSideBar'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class ListBidsForSeller extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bids: []
        }
        this.viewUser = this.viewUser.bind(this)
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

    viewUser = (buyerId) => {
        this.props.history.push({
            pathname: '/seller/view/product/bids/buyer',
            state: {
            buyerId: buyerId,
            userId: this.props.location.state.userId
            }
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <br />
                <h3 className="text-center">
                    Bid List
                    <small className="text-muted">  (All bids for auction {this.props.location.state.auctionId})</small>
                </h3>
                <br />
                <div class="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Bid ID</th>
                                <th>Bid Price</th>
                                <th>Auction Id</th>
                                <th>Maximum BidPrice</th>
                                <th>Buyer Id</th>
                                <th>Action</th>
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
                                    <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(bid.buyer.userId)} className="btn btn-info">View Buyer</button></td>
                                </tr> ) }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListBidsForSeller
