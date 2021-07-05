import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./pages/home/container";
import ProductContainer from "./pages/product/container";
import AllProductsPageContainer from "./pages/allProductsPage/container";
import BasketPageContainer from './pages/basketPage/container';
import { ShippingAndPaymentPage } from './pages/shippingAndPaymentPage/index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/product/:id" exact component={ProductContainer} />
        <Route path="/basket" exact component={BasketPageContainer} />
        <Route path="/catalog" exact component={AllProductsPageContainer} />
        <Route path="/shipping-payment" exact component={ShippingAndPaymentPage} />
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Нужно сделать изменение веса продукта в корзине и оформление заказа. А также нужна верстка страницы "Доставка и оплата"