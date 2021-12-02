import logo from "./logo.svg";
import "./App.css";
import { Content } from "./components/layout/Content"
import { Header } from "./components/layout/Header"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}
