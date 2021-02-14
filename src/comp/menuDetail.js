import { menus } from "./menuData.json";

function MenuDetail({ match, history }) {
  const menu = menus.find((menu) => menu.id === match.params.id);

  return (
    <div>
      <p>Menu Detail</p>
      <dt>id</dt>
      <dd>{menu.id}</dd>
      <dt>name</dt>
      <dd>{menu.name}</dd>
      <dt>material</dt>
      <dd>{menu.material}</dd>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}
export default MenuDetail;
