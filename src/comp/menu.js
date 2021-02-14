import { Route } from "react-router-dom";
import MenuList from "./menuList";
import MenuDetail from "./menuDetail";

function Menu({match}) {
  
    return (
        <div>
            <p>Menu page</p>
            <Route exact path={match.path} component={MenuList} />
            <Route path={`${match.path}/:id`} component={MenuDetail} />
        </div>

    )
  }
  export default Menu;