let chartInUse

async function buscarNome(){
    const nome = document.getElementById('searchBar').value.toUpperCase();
    if(!nome){
        window.alert("INSIRA UM NOME VÁLIDO.");
        return
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);

    const item = await response.json()
    
    
    console.log(item)
    
    const ctx = document.getElementById('graph').getContext('2d');
    if (!ctx) {
        window.alert("Não foi possível obter o contexto do canvas.");
        return;
    }
    
    if(chartInUse){
        chartInUse.destroy()
    }

    chartInUse = new Chart(ctx, {
        type: 'line',

        data: {
            labels: item[0].res.map(row => row.periodo),
            datasets: [
                {
                    label: `Frequencia do nome ${nome}  por periodo.`,
                    data: item[0].res.map(row => row.frequencia)
                }
            ]
        }
    }
        
    )


}
