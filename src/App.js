import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import AddBusiness from "./components/AddBusiness";
import EditBusiness from "./components/EditBusiness";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addBusiness" component={AddBusiness} />
        <Route exact path="/editBusiness/:id" component={EditBusiness} />
      </Switch>
    </div>
  );
}

export default App;
