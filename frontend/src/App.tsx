import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home/index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
