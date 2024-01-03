import pdxImg from "../assets/images/pdx.png";
import movieImg from "../assets/images/movie.png";
import ticImg from "../assets/images/tic-tac-toe.png";
import gameImg from "../assets/images/game.png";
import taskImg from "../assets/images/task.png";
import shopiImg from "../assets/images/shopi.png";
class ProjectWeb {
  constructor(name, image, description, technologies, page) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.technologies = technologies;
    this.page = page;
  }
}

export const projects = [];

const pokedex = new ProjectWeb(
  "Pokedex",
  pdxImg,
  "Una pokedex que proporciona información detallada sobre Pokémon, como sus nombres, imágenes, tipos, estadísticas y movimientos. Los usuarios pueden buscar y agregar a favoritos los pokemons.",
  ["JavaScript", "Html", "Css", "Webpack"],
  "https://liblack99.github.io/Pokedex/"
);

const moviePage = new ProjectWeb(
  "Movie Page",
  movieImg,
  "Una página de películas que proporciona información de películas en tendencia, clasificación por géneros, búsqueda por nombre, y una sección para agregar a favoritos.",
  ["JavaScript", "Html", "Css"],
  "https://liblack99.github.io/Movies-page/"
);

const ticTacToe = new ProjectWeb(
  "Tic Tac Toe",
  ticImg,
  "Un minijuego de tic tac toé o más comúnmente llamado tres en raya con su respectivo sistema de turnos, funcionalidades y persistencia de datos.",
  ["React", "Html", "Css", "vite"],
  "https://liblack99.github.io/Tic-tac-toe/"
);
const maze = new ProjectWeb(
  "Boom Maze",
  gameImg,
  "Un minijuego de un laberinto de bombas donde la meta consiste en lograr llegar al final de este sin tocar las bombas.",
  ["JavaScript", "Html", "Css"],
  "https://liblack99.github.io/Mini-video-juego/"
);
const task = new ProjectWeb(
  "Task Manager",
  taskImg,
  "Este proyecto es una app para crear tareas, con un sistema de búsqueda y persistencia de datos.",
  ["React", "Html", "Css", "vite"],
  "https://liblack99.github.io/Tasks-machine/"
);
const ecomerce = new ProjectWeb(
  "Shopi",
  shopiImg,
  "Este proyecto simula un ecommerce de productos variados con sus detalles, carrito de compras filtrado por categoría y persistencia de datos de cuenta de usuarios.",
  ["React", "Html", "vite", "tailwind", "React router"],
  "https://liblack99.github.io/Ecomerce/"
);
projects.push(ecomerce, moviePage, task, ticTacToe, pokedex, maze);
