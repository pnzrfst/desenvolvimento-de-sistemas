
async function cadastrarUser(event){

    event.preventDefault();
    
    const nomeUser = document.getElementById('nomeUser').value;
    const idadeUser = document.getElementById('idadeUser').value;
    const emailUser = document.getElementById('emailUser').value;
    const numeroTelefone = document.getElementById('numeroTelefone').value;
    const enderecoUser = document.getElementById('enderecoUser').value;
    const cidadeUser = document.getElementById('cidadeUser').value;
    
    const newUser = {
        nome: nomeUser,
        idade: idadeUser,
        email: emailUser,
        numero: numeroTelefone,
        endereco: enderecoUser,
        cidade: cidadeUser
    };

    await fetch("http://localhost:3000/person", {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {'Content-Type' : 'application/json'}
    });

    getPerson()
}


async function getPerson(){
    const response = await fetch("http://localhost:3000/person");

    const pessoa = await response.JSON()

    const lista = document.createElement('ul')
    lista.classList.add('usersCadastrados');

    
    const li = document.createElement('li');

    li.innerHTML += `<li><h1>${pessoa.nome}</h1><br>
    Nome: ${pessoa.nome} <br>
    Email: ${pessoa.email} <br>
    Numero: ${pessoa.numero} <br>
    Endereco ${pessoa.endereco}<br>
    Cidade ${pessoa.cidade} <br>
   </li>`

   lista.appendChild(li)

}