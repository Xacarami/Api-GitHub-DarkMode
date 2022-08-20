import React, { useState } from "react";
// import imagem from "../assets/react mais github.png"
import imagem from "../assets/imagem capa.png";
import "./Pesquisa.css";
import DadosEncontrados from "./DadosEncontrados";

function Pesquisa(tema) {
  const [nickname, setNickname] = useState("");
  const [pesquisa, setPesquisa] = useState([]);

  function pegarNick(e) {
    const nick = pesquisa.target.value;
    setNickname(nick);
  }
  

  return (
      <div className="completar">
    <div id={tema}>
      <img src={imagem} alt="React com Github Api" />
      <div className="pesquisa">
        <p>Digite o username</p>
        <input src="text" required onChange={setPesquisa} />
        <button onClick={pegarNick}>PESQUISAR</button>
      </div>
      <div className="dadosEncontrados">
        <DadosEncontrados nickname={nickname} tema={tema} />
      </div>
        {/* <h1>teste</h1> */}
      </div>
    </div>
  );
}

export default Pesquisa;
