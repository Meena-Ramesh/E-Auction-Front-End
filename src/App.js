import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import ListProductComponent from './components/ListProductComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <Home /> */}
        <ListProductComponent/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
