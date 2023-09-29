import "./App.css";
import Navbar from "./Components/navbar";
import Gallery from "./Components/gallery ";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
  );
}

export default App;
