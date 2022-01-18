import './App.scss';
import { useEffect, useState } from 'react';
import * as Mui from '@mui/material';
import * as Icons from '@mui/icons-material';

function App() {
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [email, setEmail] = useState('');
  const [cor, setCor] = useState('');
  const [genero, setGenero] = useState('');
  const [estado_civil, setEstado_civil] = useState('');

  async function fetchData(cep, setCidade, setEstado){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

      function fillFields(data, setCity, setState){
        setState(data.uf)
        setCity(data.localidade)
      }

    fillFields(data, setCidade, setEstado)
  }  
  useEffect(()=>{
    if(cep.length !== 8) return;
    fetchData(cep, setCidade, setEstado);
    
  }, [cep]);

  async function handlePost(){
    const body = {
      nome,
      sobrenome,
      email,
      telefone,
      cidade,
      estado,
      cep,
      estado_civil,
      genero,
      raca: cor,
      peso,
      altura
    }

    const response = await fetch('https://database-form.herokuapp.com/formulario',{
      method: "POST",
      headers:{
          'content-type': 'application/json'
      }, 
      body: JSON.stringify(body)
      });
      const data = await response.json()
    console.log(data)
    setDefault();
  }
  async function setDefault(){
    setTelefone('');
    setNome('');
    setSobrenome('');
    setCep('');
    setCidade('');
    setEstado('');
    setPeso('');
    setAltura('');
    setEmail('');
    setCor('');
    setGenero('');
    setEstado_civil('');
  }

  function verifyinput(){
    
  }

  return (
    <div className="App">
        <header 
        className='header'
        >
          <h1>IBGE - estátistica brasileira</h1>
        </header>

      <Mui.Box
      justifyContent="center"
      padding="20px"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <h3>Preencha este formulário com suas informações básicas</h3>
          <Mui.TextField
            required
            id="standard-required"
            label="Nome"
            variant="standard"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="sobrenome"
            variant="standard"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="E-mail"
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="Telefone"
            variant="standard"
            type="number"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="Cidade"
            variant="standard"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="Estado"
            variant="standard"
            value={estado}
            onChange={e => setEstado(e.target.value)}
          />
          <Mui.TextField
            required
            id="standard-required"
            label="Cep"
            variant="standard"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
        <div className='radio-form'>


          <Mui.Box>

            <Mui.FormControl component="fieldset">
              <Mui.FormLabel component="legend">Cor</Mui.FormLabel>
              <Mui.RadioGroup
                aria-label="Cor"
                defaultValue="branco"
                name="mui.radio-buttons-group"
                value={cor}
                onChange={e => setCor(e.target.value)}
              >
                <Mui.FormControlLabel value="branco" control={<Mui.Radio />} label="Branco" />
                <Mui.FormControlLabel value="preto" control={<Mui.Radio />} label="Preto" />
                <Mui.FormControlLabel value="pardo" control={<Mui.Radio />} label="Pardo" />
                <Mui.FormControlLabel value="amarelo" control={<Mui.Radio />} label="Amarelo" />
                <Mui.FormControlLabel value="indigena" control={<Mui.Radio />} label="indígena" />
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
                value={genero}
                onChange={e => setGenero(e.target.value)}
              >
                <Mui.FormControlLabel value="feminino" control={<Mui.Radio />} label="Feminino" />
                <Mui.FormControlLabel value="masculino" control={<Mui.Radio />} label="Masculino" />
                <Mui.FormControlLabel value="outro" control={<Mui.Radio />} label="outro" />
              </Mui.RadioGroup>
            </Mui.FormControl>

          </Mui.Box>

        </div>

          <Mui.Box sx={{ minWidth: 120 }}>
            <Mui.FormControl fullWidth>
              <Mui.InputLabel id="demo-simple-select-label">Estado civil</Mui.InputLabel>
              <Mui.Select
                labelId="marital-status-select-label"
                id="marital-status-select"
                label="Estado civil"
                value={estado_civil}
                onChange={e => setEstado_civil(e.target.value)}
              >
                <Mui.MenuItem value={'solteiro'}>Solteiro(a)</Mui.MenuItem>
                <Mui.MenuItem value={'casado'}>Casado(a)</Mui.MenuItem>
                <Mui.MenuItem value={'separado'}>Separado(a)</Mui.MenuItem>
                <Mui.MenuItem value={'divorciado'}>Divorciado(a)</Mui.MenuItem>
                <Mui.MenuItem value={'viuvo'}>Viúvo(a)</Mui.MenuItem>
              </Mui.Select>
            </Mui.FormControl>
           </Mui.Box>

        <Mui.Box>
            <Mui.TextField
            label="Peso"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <Mui.InputAdornment position="start">kg</Mui.InputAdornment>,
            }}
            variant="standard"
            value={peso}
            onChange={e => setPeso(e.target.value)}
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
          value={altura}
          onChange={e => setAltura(e.target.value)}
          />
        </Mui.Box>
        <Mui.Box  display="flex" alignContent="center" justifyContent="center" >
          
          <Mui.Button onClick={handlePost} variant="contained" endIcon={<Icons.Send />} 
          sx={{color: "white", backgroundColor: 'black' , marginTop: "10px", padding: "10px 25%"}}>
            <span>Send</span>
          </Mui.Button>

        </Mui.Box>
        </Mui.Box>
    </div>
  );
}

export default App;
