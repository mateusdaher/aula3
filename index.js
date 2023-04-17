import readline from 'readline-sync';
import axios from "axios";

const nome_pokemon = readline.question("Pesquise um pokemon: ");
const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome_pokemon}`);

console.log("Esses são os dados do pokemon pesquisado: ");
console.log(response.data);