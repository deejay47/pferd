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

/* Contexts */
import {CartProvider} from "./contexts/cartContext"

import './App.scss'
import Checkout from './views/Checkout/Checkout'

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
