import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./pages/home/container";
import ProductContainer from "./pages/product/container";
import AllProductsPageContainer from "./pages/allProductsPage/container";
import BasketPageContainer from './pages/basketPage/container';
import { ShippingAndPaymentPage } from './pages/shippingAndPaymentPage/index';
import SearchProductsPageContainer from './pages/searchProductsPage/container';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/product/:id" exact component={ProductContainer} />
        <Route path="/basket" exact component={BasketPageContainer} />
        <Route path="/catalog" exact component={AllProductsPageContainer} />
        <Route path="/shipping-payment" exact component={ShippingAndPaymentPage} />
        <Route path="/search" component={SearchProductsPageContainer} />
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Нужно попробовать сделать лоадеры и обработку ошибок на фронте.