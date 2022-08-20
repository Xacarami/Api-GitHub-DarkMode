import React, {useEffect, useState} from 'react'
import api from './Api'
import "./Repositorios.css"


function Repositorios({nickname, tema}) {

    const [repositorios, setRepositorios] = useState([])
    const [procurado, setProcurado] = useState(false)
    const [busca, setBusca] = useState("")

    useEffect(() => {
        api
        .get(`${nickname}/repos`)
        .then((response) => setRepositorios(response.data))
        .catch((err) => {
            console.error("Ops! ocorreu um erro -> " + err);
          });
        nickname === "" ? setProcurado(false) : setProcurado(true)
    }, [nickname]);

    const lowerBusca = busca.toLowerCase()

    const reposFiltrados = repositorios.filter((repositorio)=> {
        const concatenado = `${repositorio.name} ${repositorio.description} ${repositorio.language}`.toLowerCase().includes(lowerBusca)
        return(
            concatenado
        )
    })

    // repositorios.filter((repositorio)=> repositorio.description.includes(busca))

    if(procurado){
        return (
            <div id={tema}>
                <div className='pesquisaRepos'>
                    <p className='procuraRepos'>Pesquisar repositório</p>
                    <input src='text' onChange={(e)=>{ setBusca(e.target.value)}} value={busca} placeholder='Digite o repositório desejado'/>
                    <p className='numeroRepos'>Repositórios encontrados: {reposFiltrados.length}</p>
                </div>
                <div className='repositorioUnico'>
                    {reposFiltrados.map((repositorio)=>{
                        return (
                          <div className="teste" key={repositorio.id}>
                            <a
                              href={repositorio.html_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <h3>{repositorio.name}</h3>
                            </a>
                            <p className="linguagem">{repositorio.language}</p>
                            <p>{repositorio.description}</p>
                          </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Repositorios