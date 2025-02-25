
async function buscarUser(){
    const user = document.getElementById('searchBar').value;
    if(!user){
        window.alert("INSIRA UM USUÁRIO VÁLIDO.");
        return
    }

    const response = await fetch(`https://api.github.com/users/${user}`, {
        method: 'GET'
    });

    const item = await response.json()
    
    console.log(item)

    const lista = document.getElementById('lista_user')

    const li = document.createElement('div');
    li.classList.add('user');
    li.innerHTML = `
        <img src=" ${item.avatar_url}" />
        <h1>Nome de usuário: ${item.name} </h1>
        <p>Seguindo: ${item.following} </p>
        <p>Seguidores: ${item.followers}</p>
    `
    
    lista.appendChild(li)


}
