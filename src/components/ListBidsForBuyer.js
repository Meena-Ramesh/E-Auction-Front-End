import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import BidService from '../service/BidService';
import BuyerSideBar from './BuyerSideBar';
import Footer from './Footer';
import Header from './Header';

class ListBidsForBuyer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            bids: [],
            bidPrice: '',
            orgData: [],
            perPage: 5,
            currentPage: 0

        }
        this.addBid = this.addBidHandler.bind(this)
        this.removeAllBid = this.removeAllBidHandler.bind(this)
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
                window.alert("Bid created successfully with ID " + response.data.bidId)
                window.location.reload()
            })
            .catch(error => {
                console.log(error.response)
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
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
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br />  <br/>
                <h3 className="text-center">
                    Bid List
                    <small className="text-muted">  (All bids for auction {this.props.location.state.auctionId})</small>
                </h3>
                <br />
                <label>Enter Bid Price  </label>
                <input type="number" name="bidPrice" style={{ marginLeft: "20px" }} value={this.state.bidPrice} onChange={this.changeHandler} />
                <button className="btn btn-primary" style={{ marginLeft: "20px" }} onClick={this.addBid}>Add bid</button>
                <button className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={this.removeAllBid}>Delete All bids</button>
                <div class="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
                    <div className="container col-9">
                    <div className="container"><ReactPaginate previousLabel={"prev "} nextLabel={" next"} breakLabel={"..."} breakClassName={"break me"}
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
                                <th>Buyer Name</th>
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
                                            <td>{bid.buyer.firstName}</td>
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
export default ListBidsForBuyer