let nomes = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    nomes.push(nome);
    input.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomes[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (nomes.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo para sortear.</li>";
        return;
    }

    const indice = Math.floor(Math.random() * nomes.length);
    const sorteado = nomes[indice];

    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;
}