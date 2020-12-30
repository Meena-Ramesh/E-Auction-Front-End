/* import React, { Component } from 'react'
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
                <br />  <br />  <br />
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
 */




import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import BidService from '../service/BidService';
import Footer from './Footer';
import Header from './Header';
import SellerSideBar from './SellerSideBar';

class ListBidsForSeller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            bids: [],
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
                bids: slice
            })

    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        BidService.getAllBidsByAuction(this.props.location.state.auctionId)
            .then(response => {
                const data = response.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState(
                    {
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgData: response.data,
                        bids: slice
                    }
                )
            })
            .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
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
                <br />  <br />  <br /> <br />
                <div class="row"></div>
                <h3 className="text-center">
                    Bid List
                    <small className="text-muted">  (All bids for auction {this.props.location.state.auctionId})</small>
                </h3>
                <br />
                <div class="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
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
                                            <td><i className="fa fa-inr"></i> {bid.bidPrice}</td>
                                            <td>{bid.auction.auctionId}</td>
                                            <td><i className="fa fa-inr"></i> {bid.auction.maxBidPrice}</td>
                                            <td>{bid.buyer.userId}</td>
                                            <td><button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(bid.buyer.userId)} className="btn btn-info">View Buyer</button></td>
                                        </tr> ) 
                                }
                            </tbody>

                        </table>
                    </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}
export default ListBidsForSeller