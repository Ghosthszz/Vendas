// Lista de imagens e nomes
const catalogoItens = [
    { imagem: '../../icons/coroa.png', nome: 'VIP' },
    { imagem: '../../catalogo/liverpool.png', nome: 'Liverpool' },
    { imagem: '../../catalogo/brenda.jpg', nome: 'Brenda Trindade' },
    { imagem: '../../catalogo/amiichan.jpeg', nome: 'Amiichan' },
    { imagem: '../../catalogo/ananda.png', nome: 'Ananda' },
    { imagem: '../../catalogo/b_r.png', nome: 'Brenda e mari' },
    { imagem: '../../catalogo/hanna_owo.jpeg', nome: 'Hanna owo' },
    { imagem: '../../catalogo/isah.jpg', nome: 'Isah pack' },
    { imagem: '../../catalogo/jam.jpeg', nome: 'Jameliz' },
    { imagem: '../../catalogo/kwaii.jpg', nome: 'Kawaii Sofey' },
    { imagem: '../../catalogo/lana.jpeg', nome: 'Lana Rhoates' },
    { imagem: '../../catalogo/liliana.jpg', nome: 'Liliana' },
    { imagem: '../../catalogo/little.jpg', nome: 'Little waren' },
    { imagem: '../../catalogo/moninseua.jpg', nome: 'Moninseua' },
    { imagem: '../../catalogo/nat.jpg', nome: 'Nathalia Valente' },
    { imagem: '../../catalogo/popi.jpeg', nome: 'Popi' },
    { imagem: '../../catalogo/samara.jpeg', nome: 'Samara costa' },
    { imagem: '../../catalogo/sava.jpg', nome: 'Sava' },
    { imagem: '../../catalogo/soog.jpg', nome: 'Soog' },
    { imagem: '../../catalogo/sunaika_bruna.jpg', nome: 'Sunaika' },
    { imagem: '../../catalogo/tamiria.png', nome: 'Tamiria' },
    { imagem: '../../catalogo/vera.jpg', nome: 'Vera dijkmans' },
    { imagem: '../../catalogo/fun.jpg', nome: 'Fun time e Mia malkova' },
    { imagem: '../../catalogo/ella.png', nome: 'Ella Faria' },
    { imagem: '../../catalogo/bella.jpg', nome: 'Bellabumzy' },
];

let indexAtual = 0;
const totalItens = catalogoItens.length;

function mostrarItem(index) {
    const itemAtual = catalogoItens[index];
    const catalogoElement = document.getElementById('catalogo');

    catalogoElement.innerHTML = `
        <img src="${itemAtual.imagem}" alt="${itemAtual.nome}">
        <p>${itemAtual.nome}</p>
    `;

    indexAtual = index; 
}

mostrarItem(indexAtual);

const listaItens = document.querySelectorAll('.file-list li');
listaItens.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        mostrarItem(index);
    });
});

function toggleDarkMode() {
    const bodyBackgroundColor = document.body.style.backgroundColor;

    if (bodyBackgroundColor === "rgb(241, 241, 241)") {
        document.body.style.backgroundColor = "#121212";
        const fileListLinks = document.querySelectorAll('.file-list li a');
        for (const link of fileListLinks) {
            link.style.backgroundColor = "#333";
            link.style.color = "hotpink";
        }
        document.getElementById('sol').src = "../../icons/sol.png";
    } else {
        document.body.style.backgroundColor = "#f1f1f1";
        const fileListLinks = document.querySelectorAll('.file-list li a');
        for (const link of fileListLinks) {
            link.style.backgroundColor = "#f4f4f4";
            link.style.color = "#333";
        }
        document.getElementById('sol').src = "../../icons/moon.png";
    }
}