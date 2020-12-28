import React, { Component } from 'react'
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
                <br />
                <h3 className="text-center">
                    Bid List
                    <small className="text-muted">  (All bids for auction {this.props.location.state.auctionId})</small>
                </h3>
                <br />
                <label>Enter Bid Price</label>
                <input type="text" name="bidPrice" value={this.state.bidPrice} onChange={this.changeHandler}/>
                <button className="btn btn-primary" onClick={this.addBid}>Add bid</button>
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
