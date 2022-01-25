import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside/index";
import Forms from "./components/formularios/index";
import Contexto from "./context/contexto";
import Main from "./pages/main/index.jsx";

function Rotas() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(
      "https://database-form.herokuapp.com/formulario",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    setDate(responseData);
  }
  return (
    <Contexto.Provider value={{ date, setDate, fetchData }}>
      <Routes>
        <Route path="/" element={<Aside />}>
          {date.map((element) => {
            return (
              <Route
                path={element.nome}
                element={<Forms element={element} />}
              />
            );
          })}
          <Route path="" element={<Main />} />
        </Route>
      </Routes>
    </Contexto.Provider>
  );
}

export default Rotas;
