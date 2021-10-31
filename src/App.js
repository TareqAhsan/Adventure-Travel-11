import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import AuthProvider from "./Components/Contexts/AuthProvider";
import Home from "./Components/Home/Home";
import PlaceBook from "./Components/PlaceBook/PlaceBook";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyBooking from "./Components/MyBooking/MyBooking";
import ManageAllBooking from "./Components/Login/ManageAllBooking/ManageAllBooking";
import Addpackages from "./Components/Addpackages/Addpackages";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path ='/home'>
              <Home/>
          </Route>
          <Route path ='/mybooking'>
              <MyBooking/>
          </Route>
          <PrivateRoute path ='/placebook/:id'>
              <PlaceBook/>
          </PrivateRoute>
          <Route path ='/login'>
              <Login/>
          </Route>
          <Route path ='/manage'>
              <ManageAllBooking/>
          </Route>
          <Route path ='/addpackage'>
              <Addpackages/>
          </Route>
          <Route path ='*'>
              <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
