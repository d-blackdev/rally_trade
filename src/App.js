import { Route, Switch } from "react-router-dom";
import HomeScreen from "./page/Home/Home";
import LoginScreen from './page/Login/Login'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
        {/* <Route exact path="/register" component={RegisterScreen} /> */}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
