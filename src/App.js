import Home from "./comp/home";
import Menu from "./comp/menu";
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
      <header>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </header>
      <hr />
      <div id="container">
        <Route exact path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
      </div>
    </Router>
  )
}
export default App;