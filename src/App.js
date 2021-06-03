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

import './App.scss'

function App() {
  return (
    <div className="App">
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
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
