import { useState } from "react";
import Alert from "./AppComponents/Alert";
import Navbar from "./AppComponents/Navbar";
import Home from "./Components/Home";
import Footer from "./AppComponents/Footer";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Food from "./Components/Food";

function App () {
  const [alert, setAlert] = useState(null);
  const mode = 'blue';

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <Router>
      <Navbar mode={ mode } title='Swiggy' />
      <Alert alert={ alert } />
      <Switch>
        <Route exact path='/'>
          <Home showAlert={ showAlert } />
        </Route>
        <Route exact path='/food'>
          <Food showAlert={ showAlert } />
        </Route>
        <Route exact path='/about'>
          <About showAlert={ showAlert } />
        </Route>
      </Switch>
      <Footer mode={ mode } />
    </Router>
  );
}

export default App;
