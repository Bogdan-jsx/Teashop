import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./pages/home/container";
import ProductContainer from "./pages/product/container";
import { BasketPage } from "./pages/basketPage/index";
import AllProductsPageContainer from "./pages/allProductsPage/container";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/product/:id" exact component={ProductContainer} />
        <Route path="/basket" exact component={BasketPage} />
        <Route path="/catalog" exact component={AllProductsPageContainer} />
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;