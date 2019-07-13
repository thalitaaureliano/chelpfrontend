let box = document.querySelector('.voluntarias__box');
let button = document.getElementById("botao");

button.addEventListener('click', () => {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let horarios = document.getElementById("horarios").value;
    let sobre = document.getElementById("sobre").value;

    fetch('https://chelpbackend.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'email': email,
            'telefone': telefone,
            'endereco': endereco,
            'horarios': horarios,
            'sobre': sobre
        }),
    })
    .then(response => console.log("criou!"));
})

