import "./style.scss";

function Forms({ element }) {
  return (
    <div className="Form-section">
      <div className="formularios">
        <div className="Title-form">
          <h1>Informações do candidato</h1>
        </div>
        <div className="form-info">
          <h2>Nome: {element.nome}</h2>
          <h2>Sobrenome: {element.sobrenome}</h2>
        </div>
        <div className="form-info">
          <h2>Email: {element.email}</h2>
          <h2>Telefone: {element.telefone}</h2>
        </div>
        <div className="form-info">
          <h2>Cidade: {element.cidade}</h2>
          <h2>Estado: {element.estado}</h2>
          <h2>CEP: {element.cep}</h2>
        </div>
        <div className="form-info">
          <h2>Cor: {element.raca}</h2>
          <h2>Estado civil: {element.estado_civil}</h2>
        </div>
        <div className="form-info">
          <h2>Genêro: {element.genero}</h2>
          <h2>Peso: {element.peso}</h2>
          <h2>Altura: {element.altura}</h2>
        </div>
      </div>
    </div>
  );
}

export default Forms;
