import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./views/Home/Home"
import ItemDetails from "./views/ItemDetails/ItemDetails";
import NavBar from "./components/NavBar/NavBar"


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar></NavBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetails></ItemDetails>
          </Route>
          <Route path="/category/:id">
            <h1>categorias!</h1>
          </Route>
          <Route>
            <h1>404!</h1>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
