import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from './api';
function Cadastro(){
    const h = new useHistory();
    const [titulo,setTitulo]=useState('');
    const [descricao,setDescrecao]=useState('');
    const voltar=()=>{
        
        h.push('/');
    }
    const cadastrar=()=>{
        api.inserir(titulo,descricao);
        setTitulo('');
        setDescrecao('');
        h.push('/');
    }
    return<>
        
        <div className='bloco_atualizar'>
            <h1>Cadastrar</h1>
            <input className='input_1' type='text' value={titulo} onChange={e=>setTitulo(e.target.value)} placeholder='titulo'/>
            <input className='input_1' type='text' value={descricao} onChange={e=>setDescrecao(e.target.value)} placeholder='descrição'/>
            <button className='b1' onClick={cadastrar}>cadastrar</button>
            <button className='b2' onClick={voltar}>voltar</button>
       </div>
    </>
}

export default  Cadastro;