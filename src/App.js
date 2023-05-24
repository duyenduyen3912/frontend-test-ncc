import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav";
import Container from "./component/container";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <div className="Container">
        <Container />
        <Footer />
      </div>
    </div>
  );
}

export default App;
