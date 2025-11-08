/**
 * JS responsável pelo cadastro 
 */

const maior_id = () => {

    return axios.get('http://localhost:3000/produtos').then((ret)=>{
        return ret.data.reduce((a,b) => (a . b?.id ? a : b?.id),0);
    })
}

const gravar = () => {
    
    //inibir o botão de gravar e reset para o usuário não clicar enquanto grava
    document.getElementById("btnSubmit").disabled = true
    document.getElementById("btnReset").disabled = true

    //buscando os dados dos formularios
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = parseInt(document.querySelector("#idsaldo").value);
    const preco = parseFloat(document.querySelector("#idpreco").value);

    //montando o JSON para gravar
    maior_id().then((ret)=>{
        const dados = {
            "id": ""+( id == "null" ? parseInt(ret) + 1 : parseInt(id)),
            "descricao": descricao,
            "saldo": saldo, 
            "preco": preco
        }
        if (id=="null"){
            axios.post("http://localhost:3000/produtos",dados)
            .then((ret)=>console.log("Produto Gravo com Sucesso!"))
        } else {
            axios.put("http://localhost:3000/produtos/"+id,dados)
            .then((ret)=>console.log("Produto Gravo com Sucesso!"))
        }
    })

}

const carregar = async() => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    if (id){
        document.getElementById("id").value = id;
        const res = await axios.get("http://localhost:3000/produtos/"+id)
        document.getElementById("iddesc").value = res.data.descricao;
        document.getElementById("idpreco").value = res.data.preco;
        document.getElementById("idsaldo").value = res.data.saldo;

    } 
}

//Colocando os eventos no formulário
const form = document.querySelector('form');
form.addEventListener('submit',function (e){

    //tirar a submissão do form 
    e.preventDefault();

    //Chamando a gravação do registro 
    gravar();

    //Voltando para a página inicial 
    setTimeout(()=>{
        window.location.href = "index.html";
    },3000);
})

//colocando um evento ce carregamento da pagina 
document.addEventListener("DOMContentLoaded",function(){
    carregar();
})