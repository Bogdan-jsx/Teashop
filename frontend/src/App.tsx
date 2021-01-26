import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home/index";
import { ProductPage } from "./pages/product/index";
import { BasketPage } from "./pages/basketPage/index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/product/:id" exact component={ProductPage} />
        <Route path="/basket" exact component={BasketPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
