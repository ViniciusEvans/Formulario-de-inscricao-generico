import * as Icons from "@mui/icons-material";
import * as Mui from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Contexto from "../../context/contexto";
import "./style.scss";

export default function Main() {
  const { fetchData } = useContext(Contexto);

  const [inputs, setInputs] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    cep: "",
    estado_civil: "",
    genero: "",
    cor: "",
    peso: "",
    altura: "",
  });

  async function fetchDate() {
    const response = await fetch(`https://viacep.com.br/ws/${inputs.cep}/json/`);
    const data = await response.json();
    function fillFields(data, setInputs) {
      setInputs({ ...inputs, estado: data.uf, cidade: data.localidade });
    }

    fillFields(data, setInputs);
  }
  useEffect(() => {
    if (inputs.cep.length !== 8) return;
    fetchDate();
  }, [inputs.cep]);

  async function handlePost() {
    const body = {
      ...inputs,
      raca: inputs.cor,
    };
    console.log(body);
    const response = await fetch(
      "https://database-form.herokuapp.com/formulario",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    
    fetchData();
    setDefault();
  }
  async function setDefault() {
    const limpo = {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      cidade: "",
      estado: "",
      cep: "",
      estado_civil: "",
      genero: "",
      cor: "",
      peso: "",
      altura: "",
    };
    setInputs(limpo);
  }

  return (
    <div className="App">
      <Mui.Box
        justifyContent="center"
        padding="3rem"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Preencha este formulário com suas informações básicas</h2>
        <Mui.TextField
          required
          id="standard-required"
          label="Nome"
          variant="standard"
          value={inputs.nome}
          onChange={(e) => setInputs({ ...inputs, nome: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="sobrenome"
          variant="standard"
          value={inputs.sobrenome}
          onChange={(e) => setInputs({ ...inputs, sobrenome: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="E-mail"
          variant="standard"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="Telefone"
          variant="standard"
          type="number"
          value={inputs.telefone}
          onChange={(e) => setInputs({ ...inputs, telefone: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="Cidade"
          variant="standard"
          value={inputs.cidade}
          onChange={(e) => setInputs({ ...inputs, cidade: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="Estado"
          variant="standard"
          value={inputs.estado}
          onChange={(e) => setInputs({ ...inputs, estado: e.target.value })}
        />
        <Mui.TextField
          required
          id="standard-required"
          label="Cep"
          variant="standard"
          value={inputs.cep}
          onChange={(e) => setInputs({ ...inputs, cep: e.target.value })}
        />
        <div className="radio-form">
          <Mui.Box>
            <Mui.FormControl component="fieldset">
              <Mui.FormLabel component="legend">Cor</Mui.FormLabel>
              <Mui.RadioGroup
                aria-label="Cor"
                defaultValue="branco"
                name="mui.radio-buttons-group"
                value={inputs.cor}
                onChange={(e) => setInputs({ ...inputs, cor: e.target.value })}
              >
                <Mui.FormControlLabel
                  value="branco"
                  control={<Mui.Radio />}
                  label="Branco"
                />
                <Mui.FormControlLabel
                  value="preto"
                  control={<Mui.Radio />}
                  label="Preto"
                />
                <Mui.FormControlLabel
                  value="pardo"
                  control={<Mui.Radio />}
                  label="Pardo"
                />
                <Mui.FormControlLabel
                  value="amarelo"
                  control={<Mui.Radio />}
                  label="Amarelo"
                />
                <Mui.FormControlLabel
                  value="indigena"
                  control={<Mui.Radio />}
                  label="indígena"
                />
              </Mui.RadioGroup>
            </Mui.FormControl>
          </Mui.Box>

          <Mui.Box>
            <Mui.FormControl component="fieldset">
              <Mui.FormLabel component="legend">Gênero</Mui.FormLabel>
              <Mui.RadioGroup
                aria-label="genero"
                defaultValue="mulher"
                name="mui.radio-buttons-group"
                value={inputs.genero}
                onChange={(e) =>
                  setInputs({ ...inputs, genero: e.target.value })
                }
              >
                <Mui.FormControlLabel
                  value="feminino"
                  control={<Mui.Radio />}
                  label="Feminino"
                />
                <Mui.FormControlLabel
                  value="masculino"
                  control={<Mui.Radio />}
                  label="Masculino"
                />
                <Mui.FormControlLabel
                  value="outro"
                  control={<Mui.Radio />}
                  label="outro"
                />
              </Mui.RadioGroup>
            </Mui.FormControl>
          </Mui.Box>
        </div>

        <Mui.Box sx={{ minWidth: "12rem" }}>
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">
              Estado civil
            </Mui.InputLabel>
            <Mui.Select
              labelId="marital-status-select-label"
              id="marital-status-select"
              label="Estado civil"
              value={inputs.estado_civil}
              onChange={(e) =>
                setInputs({ ...inputs, estado_civil: e.target.value })
              }
            >
              <Mui.MenuItem value={"solteiro"}>Solteiro(a)</Mui.MenuItem>
              <Mui.MenuItem value={"casado"}>Casado(a)</Mui.MenuItem>
              <Mui.MenuItem value={"separado"}>Separado(a)</Mui.MenuItem>
              <Mui.MenuItem value={"divorciado"}>Divorciado(a)</Mui.MenuItem>
              <Mui.MenuItem value={"viuvo"}>Viúvo(a)</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>

        <Mui.Box>
          <Mui.TextField
            label="Peso"
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <Mui.InputAdornment position="start">kg</Mui.InputAdornment>
              ),
            }}
            variant="standard"
            value={inputs.peso}
            onChange={(e) => setInputs({ ...inputs, peso: e.target.value })}
          />
        </Mui.Box>

        <Mui.Box>
          <Mui.TextField
            id="height"
            label="Altura"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={inputs.altura}
            onChange={(e) => setInputs({ ...inputs, altura: e.target.value })}
          />
        </Mui.Box>
        <Mui.Box display="flex" alignContent="center" justifyContent="center">
          <Mui.Button
            onClick={handlePost}
            variant="contained"
            endIcon={<Icons.Send />}
            sx={{
              color: "white",
              backgroundColor: "black",
              marginTop: "1rem",
              padding: "1rem 25%",
            }}
          >
            <span>Send</span>
          </Mui.Button>
        </Mui.Box>
      </Mui.Box>
    </div>
  );
}
