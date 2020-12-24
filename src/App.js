import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home';
import BuyerHome from './components/BuyerHome';
import SellerHome from './components/SellerHome';
import ListProductComponent from './components/ListProductComponent';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/seller" component={SellerHome}/>
        <Route exact path="/buyer" component={BuyerHome} />
        <Route exact path="/error" component={ErrorPage} />
        </Switch>
        {/* <ListProductComponent/> */}
    </BrowserRouter>
    
  );
}

export default App;
