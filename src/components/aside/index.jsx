import "./style.scss";
import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../../context/contexto";

function Aside() {
  const { date, setDate } = useContext(Contexto);
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
