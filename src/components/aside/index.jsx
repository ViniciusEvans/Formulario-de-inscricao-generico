import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Contexto from "../../context/contexto";
import "./style.scss";

function Aside() {
  const { date } = useContext(Contexto);
  console.log(date);
  return (
    <div className="main">
      <header className="header">
        <h1>IBGE - estátistica brasileira</h1>
      </header>
      <div className="master">
        <div className="aside">
          <div className="aside-item">
            <NavLink to="/">Home</NavLink>
          </div>
          {date.map((element) => {
            return (
              <div className="aside-item">
                <NavLink to={element.nome}>{element.nome}</NavLink>
              </div>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Aside;
