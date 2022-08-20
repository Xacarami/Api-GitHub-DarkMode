import React, { createContext, useState } from 'react'
import './App.css';
import Pesquisa from './components/Pesquisa';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

function App() {
  const [tema, setTema] = useState("dark")

  const trocarTema = () =>{
    setTema((temaAtual)=>(temaAtual === "light" ? "dark" : "light"))
  }

  return (
    <>

      <ThemeContext.Provider value={{ tema, trocarTema }}>
        <div id={tema}>
          <div className="switch">
            <label>{tema === "light" ? "Modo Claro" : "Modo Escuro"}</label>
            <ReactSwitch
              // borderRadius={10}
              onChange={trocarTema}
              checked={tema === "dark"}
              />
          </div> 
          <div className="pesquisaComponent">
            <Pesquisa tema={tema} />
          </div> 
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
