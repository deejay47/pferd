import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

/* Components */
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"

/* Views */
import Home from "./views/Home/Home"
import CategoryItems from "./views/CategoryItems/CategoryItems"
import ItemDetails from "./views/ItemDetails/ItemDetails"
import NotFound from "./views/NotFound/NotFound"
import Cart from './views/Cart/Cart'
import Checkout from './views/Checkout/Checkout'
import OrderPayment from './views/OrderPayment/OrderPayment'
import Resellers from './views/Resellers/Resellers'
import About from './views/About/About'

/* Contexts */
import {CartProvider} from "./contexts/cartContext"

import './App.scss'
import ConfirmedOrder from './views/ConfirmedOrder/ConfirmedOrder'

function App() {

  return (    
  
  <div className="App">

    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/resellers">
            <Resellers></Resellers>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/category/:id">
            <CategoryItems></CategoryItems>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetails></ItemDetails>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route exact path="/payment/:id">
            <OrderPayment></OrderPayment>
          </Route>
          <Route exact path="/order/:id">
            <ConfirmedOrder></ConfirmedOrder>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
 
    </CartProvider> 
    
      </div>
  );
}

export default App;
