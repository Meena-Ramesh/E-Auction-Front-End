/* import React, { Component } from 'react'
import AuctionService from '../service/AuctionService'
import SellerSideBar from './SellerSideBar'
import { format } from "date-fns";
import Header from './Header';

class ListAllAuction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            auctions : []
        }
    }

    componentDidMount() {
        AuctionService.getAllAuctions().then((response) => {
            this.setState({ auctions: response.data })
        })
        .catch(error => {
            window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
        })
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <h3 className="text-center">
                    Auction List
                    <small className="text-muted">  (All auctions in the system)</small>
                </h3>
                <br />
                <div className="row">
                    <SellerSideBar userId= {this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Auction ID</th>
                                <th>Base Price</th>
                                <th>Starting Date</th>
                                <th>Ending Date</th>
                                <th>Maximum Bid Price</th>
                                <th>Bid Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.auctions.map(
                                    auction =>
                                        <tr key={auction.auctionId}>
                                            <td>{auction.auctionId}</td>
                                            <td>{auction.basePrice}</td>
                                            <td>{auction.startDate.slice(0,10)}</td>
                                            <td>{auction.endDate.slice(0,10)}</td>
                                            <td>{auction.maxBidPrice}</td>
                                            <td>{auction.bidWinner}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListAllAuction
 */



import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import Header from './Header';
import SellerSideBar from './SellerSideBar';
import AuctionService from '../service/AuctionService'
import Footer from './Footer';

class ListAllAuction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            auctions : [],
            orgData: [],
            perPage: 5,
            currentPage: 0

        }
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
                auctions: slice
            })

    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        AuctionService.getAllAuctions()
        .then(response => {
                const data = response.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState(
                    {
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgData: response.data,
                        auctions: slice
                    }
                )
            })
        .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br/>
                <h3 className="text-center">
                    Auction List
                    <small className="text-muted">  (All auctions in the system)</small>
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
                            <th>Auction ID</th>
                                <th>Base Price</th>
                                <th>Starting Date</th>
                                <th>Ending Date</th>
                                <th>Maximum Bid Price</th>
                                <th>Bid Winner</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.auctions.map(
                                        auction =>
                                            <tr key={auction.auctionId}>
                                                <td>{auction.auctionId}</td>
                                                <td><i className="fa fa-inr"></i> {auction.basePrice}</td>
                                                <td>{auction.startDate.slice(0,10)}</td>
                                                <td>{auction.endDate.slice(0,10)}</td>
                                                <td><i className="fa fa-inr"></i> {auction.maxBidPrice}</td>
                                                <td>{auction.bidWinner}</td>
                                            </tr>
                                    )
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
export default ListAllAuction