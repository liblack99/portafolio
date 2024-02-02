import pdxImg from "../assets/images/pdx.png";
import movieImg from "../assets/images/movie.png";
import gameImg from "../assets/images/game.png";
import taskImg from "../assets/images/task.png";
import shopiImg from "../assets/images/shopi.png";
import animationImg from "../assets/images/animation.png";
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
  ["React", "Html", "Css", "Vite"],
  "https://liblack99.github.io/Tasks-machine/"
);
const ecommerce = new ProjectWeb(
  "Shopi",
  shopiImg,
  "Este proyecto simula un ecommerce de productos variados con sus detalles, carrito de compras filtrado por categoría y persistencia de datos de cuenta de usuarios.",
  ["React", "Html", "Vite", "Tailwind", "React Router"],
  "https://liblack99.github.io/Ecomerce/"
);

const animation = new ProjectWeb(
  "Bunnylan",
  animationImg,
  "Este proyecto es un minijuego animado que consiste en atrapar conejos, cuenta con sistema de puntuacion por cada conejo atrapado esto ara que su velocidad aumente haciendo mas complicado sumar puntos.",
  ["JavaScript", "Html", "Css"],
  "https://liblack99.github.io/Animationlan/"
);

projects.push(ecommerce, moviePage, task, pokedex, maze, animation);
