

const api={
    listar:async()=>{
       let req =await fetch('https://aqueous-atoll-78547.herokuapp.com/api/lista')
       let json = await req.json();
       return json;
       
    },
    inserir:(titulo,descricao)=>{
        let formdata = new FormData();
        formdata.append('titulo',titulo);
        formdata.append('descricao',descricao);
        fetch('https://aqueous-atoll-78547.herokuapp.com/api/lista',{
            method:'POST',
            body:formdata
        })
    },
    atualizar:async(titulo,descricao,id)=>{
        let formdata = new FormData();
        formdata.append('titulo',titulo);
        formdata.append('descricao',descricao);
        formdata.append('id',id);
        await fetch('https://aqueous-atoll-78547.herokuapp.com/api/lista/'+id,{
            method:'PUT',
            body:formdata
        }).then(r=>{console.log(r)})
        
    },
    deletar:async (id)=>{
        await fetch('https://aqueous-atoll-78547.herokuapp.com/api/lista/'+id,{
            method:'DELETE'
        })
    }
}
export default api;