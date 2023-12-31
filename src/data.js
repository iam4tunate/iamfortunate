import FILMPULSE1 from "./assets/filmpulse1.png";
import FILMPULSE2 from "./assets/filmpulse2.png";
import FILMPULSE3 from "./assets/filmpulse3.png";

import AEMOURONE1 from "./assets/armourone1.png";
import AEMOURONE2 from "./assets/armorone2.png";

export const projectsData = [
  {
    id: "01",
    name: "Filmpulse",
    note: "Explore the world of cinema effortlessly with our React-based movie information web app. Designed using Tailwind CSS, Filmpulse seamlessly integrates real-time data from the TMDB API through React-Query. Discover detailed information about your favorite movies, including cast, crew, ratings, trailers and more. Enjoy a visually appealing and responsive interface that brings the magic of movies right to your fingertips.",
    techStack: ["Tailwindcss", "ReactJS", "React Query", "TMDB API"],
    images: [FILMPULSE1, FILMPULSE2, FILMPULSE3],
    url: "https://filmpulse1.netlify.app/",
  },
  {
    id: "02",
    name: "Armourone",
    note: "Armourone is a React-based website for a dealer in a wide range of bike, boat, and motorcycle parts. Crafted for speed and style using Tailwind CSS, the user-friendly interface makes navigating through parts a breeze. Stay connected with our seamless communication feature powered by EmailJS, allowing you to inquire about and order parts effortlessly. Experience a visually appealing and responsive platform designed to cater to all your bike, boat, and motorcycle needs.",
    techStack: ["Tailwindcss", "ReactJS"],
    images: [AEMOURONE1, AEMOURONE2],
    url: "https://armourone.netlify.app/",
  },
];
