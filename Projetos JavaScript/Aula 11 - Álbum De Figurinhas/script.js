// Array de figurinhas disponíveis
var figurinhasDisponiveis = [
    "FiguraRobô.png",
    "FiguraNoob.png",
    "FiguraMilionário.png",
    "FiguraRocraft.png"
    // Adicione mais figurinhas aqui
];

// Array de figurinhas coladas no álbum
var figurinhasColadas = [];

// Função para abrir um pacote de figurinhas
function abrirPacote() {
    var numeroFigurinhasPorPacote = 1; // Defina o número de figurinhas por pacote aqui
    for (var i = 0; i < numeroFigurinhasPorPacote; i++) {
        var figurinha = figurinhasDisponiveis[Math.floor(Math.random() * figurinhasDisponiveis.length)];
        figurinhasColadas.push(figurinha);
    }
    atualizarAlbum();
}

// Função para atualizar o álbum de figurinhas na tela
function atualizarAlbum() {
    var albumElement = document.getElementById("album");
    albumElement.innerHTML = "";

    for (var i = 0; i < figurinhasColadas.length; i++) {
        var figurinhaElement = document.createElement("img");
        figurinhaElement.src = figurinhasColadas[i];
        figurinhaElement.classList.add("figurinha");
        albumElement.appendChild(figurinhaElement);
    }
}