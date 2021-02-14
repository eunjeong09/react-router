import { Link } from "react-router-dom";
import { menus } from "./menuData.json";

function MenuList({match}) {
  
    return (
        <div>
            <p>MenuList page</p>
            <ul>
                {menus.map(({ id, name }) => (
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
  }
  export default MenuList;