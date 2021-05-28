import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

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
          <Route exact path="/item">
            <ItemDetails></ItemDetails>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
