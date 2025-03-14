var listaAmigos = [];
var listaElementos = document.getElementById("listaAmigos");
var resultadoElementos = document.getElementById("resultado");

function adicionarAmigo() {
    var input = document.getElementById("amigo");
    var nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    // Verifica se o nome já está na lista
    for (var i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] === nome) {
            alert("Esse nome já foi adicionado!");
            return;
        }
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    listaElementos.innerHTML = ""; // Limpa a lista antes de atualizar

    for (var i = 0; i < listaAmigos.length; i++) {
        var li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaElementos.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear!");
        return;
    }

    var indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    var amigoSorteado = listaAmigos[indiceSorteado];

    resultadoElementos.innerHTML = "<li><strong>🎉 " + amigoSorteado + " foi sorteado! 🎉</strong></li>";
}
