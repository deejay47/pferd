import NavBar from "./components/NavBar/NavBar";
import {Alert } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Alert key="1" variant="dark">
        Hola mundo!
      </Alert>

    </div>
  );
}

export default App;
