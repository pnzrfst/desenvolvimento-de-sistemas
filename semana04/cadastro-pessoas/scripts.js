async function addPerson(event) {
event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;

    if (!name || !age || !email || !phone || !address || !city) {
        alert("FALTOU PREENCHER ALGUMA COISA...")
        return;
    }

    let person = { name, age, email, phone, address, city };

    await fetch("http://localhost:3000/person", {
        method: 'POST',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json' }
    })


}

