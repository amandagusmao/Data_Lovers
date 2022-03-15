import data from './data/ghibli/ghibli.js';
import music from './spotify.js';
import { filterFemale, filterMale, filterNA } from './data.js';

// função find
const numMovie = window.location.search.replace("?id=", "");
const anime = data.films.find((buscaFilme) => {
    return buscaFilme.id === numMovie
});

document.getElementById("titulo").innerHTML = anime.title;
document.getElementById("poster").src = anime.poster;
document.getElementById("sinopse").innerHTML = anime.description;
document.getElementById("diretor").innerHTML = "DIRETOR: " + anime.director;
document.getElementById("produtor").innerHTML = "PRODUTOR: " + anime.producer;
document.getElementById("ano").innerHTML = "LANÇAMENTO: " + anime.release_date;
document.getElementById("nota").innerHTML = "NOTA: " + anime.rt_score;

function printTela(data){
    document.querySelector(".personagens").innerHTML = "";

    if (data.length === 0) {
        document.querySelector(".personagens").innerHTML = `
            <p class="aviso">Não há personagens de outros gêneros nesse filme!</p>
        `;
    }
    
    data.forEach((person) => {
        document.querySelector(".personagens").innerHTML += `
        <div class="character">
            <p class="name">${person.name}</p>
            <div class="imgwrapper">
                <img class="foto" src="${person.img}"/>
            </div>
            <p class="text-person">Gênero: ${person.gender}</p>
            <p class="text-person">Idade: ${person.age}</p>
            <p class="text-person">Espécie: ${person.specie}</p>
        </div>
        `
    });
}

printTela(anime.people);

const characters = anime.people;

const order = document.getElementById("order");

order.addEventListener("change", (event) => {
    const selectOrder = event.target.value;
    if (selectOrder === "Female") {
        const filterCharacter = filterFemale(characters);
        printTela(filterCharacter);
    }
    if (selectOrder === "Male") {
        const filterCharacter = filterMale(characters);
        printTela(filterCharacter);
    }
    if (selectOrder === "NA") {
        const filterCharacter = filterNA(characters);
        printTela(filterCharacter);
    }
    if (selectOrder === "All") {
        printTela(characters);
    }
});

const musicId = music.playlist.find((buscarId) => {
    return buscarId.id === anime.id
});

const spotify = `
    <iframe
        style="border-radius:12px"
        id="test"
        src="${musicId.spotifyLink}"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture">
    </iframe>`;

document.getElementById('spotify').innerHTML = spotify;