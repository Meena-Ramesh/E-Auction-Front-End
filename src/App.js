import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import ListMyProducts from './components/ListMyProducts';
import ViewProfile from './components/ViewProfile';
import ListAllAuction from './components/ListAllAuction';
import ListProductsForReview from './components/ListProductsForReview';
import ViewProductForSeller from './components/ViewProductForSeller';
import ViewProductForAdmin from './components/ViewProductForAdmin';
import RegisterUser from './components/RegisterUser';
import ListAllUserForAdmin from './components/ListAllUserForAdmin';
import ViewUserForAdmin from './components/ViewUserForAdmin';
import ListAllProductForSeller from './components/ListAllProductForSeller';
import ListAllProductForBuyer from './components/ListAllProductForBuyer';
import ViewProductForBuyer from './components/ViewProductForBuyer';
import ListBidsForBuyer from './components/ListBidsForBuyer';
import ListAllCategory from './components/ListAllCategory';
import ListProductByCategory from './components/ListProductByCategory';
import InitiateAuction from './components/InitiateAuction';
import ListBidsForSeller from './components/ListBidsForSeller';
import ViewBuyerForSeller from './components/ViewBuyerForSeller';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';



function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={RegisterUser}/>
        <Route exact path="/error" component={ErrorPage} />
        <Route exact path="/seller/view/product" component={ViewProductForSeller}/>
        <Route exact path="/seller/product/add" component={AddProduct}/>
        <Route exact path="/seller/product/update" component={UpdateProduct}/>
        <Route exact path="/seller/view/product/initiateauction" component={InitiateAuction}/>
        <Route exact path="/seller/view/product/bids" component={ListBidsForSeller}/>
        <Route exact path="/seller/view/product/bids/buyer" component={ViewBuyerForSeller}/>
        <Route exact path="/view/auction/all" component={ListAllAuction}/>
        <Route exact path="/allproducts" component={ListAllProductForSeller} />
        <Route exact path="/myproducts" component={ListMyProducts} />
        <Route exact path="/product/review" component={ListProductsForReview} />
        <Route exact path="/admin/user/all" component={ListAllUserForAdmin} />
        <Route exact path="/admin/user/profile" component={ViewUserForAdmin} />
        <Route exact path="/admin/product" component = {ViewProductForAdmin} />
        <Route exact path="/myprofile" component={ViewProfile} />
        <Route exact path="/buyer/product/all" component={ListAllProductForBuyer} />
        <Route exact path="/buyer/product" component={ViewProductForBuyer} />
        <Route exact path="/buyer/product/bids" component={ListBidsForBuyer} />
        <Route exact path="/buyer/category" component={ListAllCategory} />
        <Route exact path="/buyer/category/products" component={ListProductByCategory} />

        </Switch>
        </BrowserRouter>
    
        
    
    
  );
}

export default App;
