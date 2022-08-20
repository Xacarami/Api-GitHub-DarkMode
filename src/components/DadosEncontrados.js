import React, {useEffect, useState} from 'react'
import api from './Api'
import "./DadosEncontrados.css"
import Repositorios from './Repositorios'
import { FaBuilding } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function DadosEncontrados({nickname, tema}) {

    const [arrayCompleto, setArrayCompleto] = useState([])
    const [procurado, setProcurado] = useState(false)

    useEffect(() => {
        api
        .get(`${nickname}`)
        .then((response) => setArrayCompleto(response.data))
        .catch((err) => {
            console.error("Ops! ocorreu um erro -> " + err);
          });
        nickname === "" ? setProcurado(false) : setProcurado(true)
    }, [nickname]);

    if(procurado){
    return (
        <>
        <div id={tema}>
            <div className='resumoPerfil' key={arrayCompleto.id}>
                <img src={arrayCompleto.avatar_url} alt="Avatar" />
                <div className='logins'>
                    <a href={arrayCompleto.html_url} target="_blank" rel="noreferrer"><h2>{arrayCompleto.name}</h2></a>
                    <p>{arrayCompleto.bio}</p>
                    <div className='divNick'>
                        <p className='nickGithub'><a href={arrayCompleto.html_url} target="_blank" rel="noreferrer" className='nick'><span><AiFillGithub /></span>{arrayCompleto.login}</a></p>
                        {arrayCompleto.company ? <p className='company'><span><FaBuilding /></span>{arrayCompleto.company}</p> : ""}
                    </div>    
                </div>
            </div>
            <div>
                <Repositorios nickname={nickname} tema={tema}/>
            </div>
        </div>
        </>
        )
    }
}

export default DadosEncontrados