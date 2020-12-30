/* import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import BuyerSideBar from './BuyerSideBar'
import Header from './Header'

class ListAllCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
        this.viewAllProduct = this.viewAllProduct.bind(this)
    }

    componentDidMount() {
        ProductService.getAllCategory()
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => {
                console.log(error.response)
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    viewAllProduct = (category) => {
        this.props.history.push({
            pathname: '/buyer/category/products',
            state: {
                userId: this.props.location.state.userId,
                category: category
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <h3 className="text-center">
                    Category List
                    <small className="text-muted">  (All categories in the system)</small>
                </h3>
                <br />
                <div className="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.categories.map(category =>
                                    <tr>
                                        <td>{category}</td>
                                        <td><button className="btn btn-info" style={{ marginLeft: "20px" }} onClick={ () => this.viewAllProduct(category)}>View Products</button></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListAllCategory
 */

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import ProductService from '../service/ProductService';
import BuyerSideBar from './BuyerSideBar';
import Footer from './Footer';
import Header from './Header';

class ListAllCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            categories: [],
            orgData: [],
            perPage: 5,
            currentPage: 0

        }
        this.viewAllProduct = this.viewAllProduct.bind(this)
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
                categories: slice
            })

    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        ProductService.getAllCategory()
        .then(response => {
                const data = response.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState(
                    {
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgData: response.data,
                        categories: slice
                    }
                )
            })
        .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }

    viewAllProduct = (category) => {
        this.props.history.push({
            pathname: '/buyer/category/products',
            state: {
                userId: this.props.location.state.userId,
                category: category
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br/>
                <h3 className="text-center">
                    Category List
                    <small className="text-muted">  (All categories in the system)</small>
                </h3>
                <br />
                <div class="row">
                    <BuyerSideBar userId={this.props.location.state.userId} />
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
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.categories.map(category =>
                                        <tr>
                                            <td>{category}</td>
                                            <td><button className="btn btn-info" style={{ marginLeft: "20px" }} onClick={ () => this.viewAllProduct(category)}>View Products</button></td>
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
export default ListAllCategory