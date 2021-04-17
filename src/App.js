import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Switch>
      
      <Route path="/login" component={Login} />
      
      <Redirect from="/" exact to="/login" />
      <Layout />
      <Redirect to="/not-found" />
      
    </Switch>
    
  );
}

export default App;
