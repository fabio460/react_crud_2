import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import api from './api';
function Atualizar(){
    const tituloatual = useSelector(state=>state.usuario.titulo);
    const descricaoatual = useSelector(state=>state.usuario.descricao);
    const selId= useSelector(state=> state.usuario.id);
    const [titulo,setTitulo]=useState(tituloatual);
    const [descricao,setDescricao]=useState(descricaoatual);
    const h = new useHistory();
    
    const voltar=()=>{
        h.push('/');
    }
    const modal_atualizar=()=>{
       document.querySelector('.modal_atualizar_tela').classList.add('modal_atualizar_visivel')
    }
    const sim=()=>{
        api.atualizar(titulo,descricao,selId);
       
       h.push('/');
    }
    return<>
       
       <div className='bloco_atualizar'>
           <h1>Atualizar</h1>
            <input className='input_1' type='text'  value={titulo} onChange={e=>setTitulo(e.target.value)}/>
            <input className='input_1' type='text' value={descricao} onChange={e=>{setDescricao(e.target.value)}}/>
            <button className='b1' onClick={modal_atualizar}>atualizar</button>
            <button className='b2' onClick={voltar}>voltar</button>
       </div>
       
       <div className='modal_atualizar_tela'>
            <div className='modal_atualizar'>
                <h1>Tem certeza que quer atualizar ?</h1>
                <button className='b1' onClick={sim}>sim</button>
                <button className='b2' onClick={()=>{
                    document.querySelector('.modal_atualizar_tela').classList.remove('modal_atualizar_visivel');
                }}>não</button>
            </div>
       </div>
    </>
}

export default Atualizar;