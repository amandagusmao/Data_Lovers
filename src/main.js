import { filmOrder, filterMovie, filterFemale } from './data.js';
import data from './data/ghibli/ghibli.js';

// printar os filmes na tela
const filmes = data.films;
function printTela(data) {
    document.getElementById("filmes").innerHTML = data.map((item) => `
    <div class="item">
        <div class="img-te" href="/filme">
            <a href="/selectfilm?id=${item.id}">
                <img src="${item.poster}" />
            </a>
        </div>
    </div>
  `).join("")
}

printTela(filmes);

//chamando evento seletor ordenar
const order = document.getElementById("order")

order.addEventListener("change", (event) => {
    const selectOrder = event.target.value;
    if (selectOrder !== "") {
        const filterAz = filmOrder(filmes, selectOrder);
        printTela(filterAz);
    }
});

// botão de busca
document.getElementById('btnBusca').addEventListener('click', function () {
    event.preventDefault();
    const buscaInput = document.getElementById("txtBusca").value;
    
    const filmesEncontrados = filterMovie(filmes, buscaInput);
    
    printTela(filmesEncontrados);
});

// botão para recarregar a página
const btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {
    location.reload();
});

//cálculo agregado
const total = filmes.reduce((acc, film) => {
    const personagens = film.people;
    const totalFemale = filterFemale(personagens).length;
  
    return {
      total: acc.total + personagens.length,
      female: acc.female + totalFemale,
    }
}, { total: 0, female: 0 });

const porc = (total.female / total.total * 100).toFixed(2);

console.log(porc);