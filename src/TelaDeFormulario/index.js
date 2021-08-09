import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from './api';
import {useDispatch} from 'react-redux';
import logo from '../TelaDeFormulario/logo.png';
function TelaDeFormulario(){
    const [list,setList]=useState([]);
    const [id,setId]=useState('');
    const h = new useHistory();
    const dispatch =useDispatch();
    const [titulo,setTitulo]=useState('');
    const [descricao,setDescricao]=useState('');
    useEffect(async ()=>{
        const l =await api.listar();
        setList(l);
    },[list]);
    const cadastro=()=>{
        h.push('/cadastro');
    }
    const deletar=()=>{
         api.deletar(id);
         document.querySelector('.model_escuro').classList.remove('modal_escuro_visivel');
        
    }
    
    const voltar=()=>{
        document.querySelector('.model_escuro').classList.remove('modal_escuro_visivel');
    }
    
    
    return<>
       <header>
           <a href='https://fabio460.github.io/Portifolio/' target='_blank' rel="noreferrer"><img src={logo} alt=''/></a>
           <button onClick={cadastro}>cadastrar</button>
       </header>
       <table>
           <th>Titulo</th>
           <th>Descrição</th>
           <th>Ação</th>
           {list.map((item,key)=>{
               return (
            <tr>
                <td>{item.titulo}</td>
                <td>{item.descricao}</td>
                <td>
                    <button className='b3' onClick={()=>{
                       document.querySelector('.model_escuro_exibir').classList.add('model_escuro_exibir_visivel');
                       setTitulo(item.titulo);
                       setDescricao(item.descricao)
                    }}>visualizar</button>
                    
                    <button className='b1' onClick={()=>{
                       setDescricao(item.descricao);
                       setTitulo(item.titulo);
                        dispatch({
                            type:'SET_NAME',
                            payload:{descricao:item.descricao,titulo:item.titulo,id:item.id}
                            
                         });
                         
                       h.push('/atualizar')
                    }}>editar</button>
                    <button className='b2' onClick={()=>{
                        document.querySelector('.model_escuro').classList.add('modal_escuro_visivel');
                        document.querySelector('.modal_excluir').style.opacity=1;
                        setId(item.id);
                    
                    }
                    } >excluir</button>
                </td>
           </tr>
               );
           })}   
       </table>
       <div className='model_escuro'>
            <div className='modal_excluir'>
                <h1>Tem certeza que deseja excluir ?</h1>
                <button className='b1' onClick={deletar}>excluir</button>
                <button className='b2' onClick={voltar}>voltar</button>
            </div>
       </div>
       <div className='model_escuro_exibir'>
            <div className='modal_excluir_exibir'>
                <h1>Titulo: {titulo}</h1>
                <h1>Descrição: {descricao}</h1>
                <button className='b2' onClick={()=>{
                       document.querySelector('.model_escuro_exibir').classList.remove('model_escuro_exibir_visivel');}}>fechar
                </button>
            </div>
       </div>
       
    </>
}

export default TelaDeFormulario;