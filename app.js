let amigos = [];

document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.querySelector(".input-name");
    const addButton = document.querySelector(".button-add");

    // Evento para capturar o Enter no campo de entrada
    inputName.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o comportamento padrão do Enter
            addButton.click(); // Simula o clique no botão "Adicionar"
        }
    });

    // Adiciona o evento keydown ao input de id "amigo"
    document.getElementById("amigo").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Impede o comportamento padrão do Enter
                adicionarAmigo();
            }
        });
});

document.querySelector(".button-reset").addEventListener("click", function () {
    reiniciarJogo();
    document.getElementById("amigo").value = "";
    document.querySelector(".input-name").value = "";
});


function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione nomes antes de sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong>! 🎁</li>`;
}

function reiniciarJogo() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
