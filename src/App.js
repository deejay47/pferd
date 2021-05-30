import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"

import Home from "./views/Home/Home"
import CategoryItems from "./views/CategoryItems/CategoryItems"
import ItemDetails from "./views/ItemDetails/ItemDetails"
import NotFound from "./views/NotFound/NotFound"

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
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
