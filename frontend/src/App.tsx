import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./pages/home/container";
import { ProductPage } from "./pages/product/index";
import { BasketPage } from "./pages/basketPage/index";
import { AllProductsPage } from "./pages/allProductsPage/index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/product/:id" exact component={ProductPage} />
        <Route path="/basket" exact component={BasketPage} />
        <Route path="/catalog" exact component={AllProductsPage} />
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Картинка не должна зависеть от продукта YES
//Внутри продукта должны быть долько айди его картинок
//Картинки должны возвращатся через ссылку
//(Возможно вообще убрать связь картинок и продуктов)