import FILMPULSE1 from "./assets/filmpulse1.png";
import FILMPULSE2 from "./assets/filmpulse2.png";
import FILMPULSE3 from "./assets/filmpulse3.png";

import AEMOURONE1 from "./assets/armourone1.png";
import AEMOURONE2 from "./assets/armorone2.png";

import SLEEK1 from "./assets/sleek1.png";
import SLEEK2 from "./assets/sleek2.png";
import SLEEK3 from "./assets/sleek3.png";
import SLEEK4 from "./assets/sleek4.png";

import BU1 from "./assets/BU1.png";
import BU2 from "./assets/BU2.png";
import BU3 from "./assets/BU3.png";
import BU4 from "./assets/BU4.png";

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
    name: "BU",
    note: "Crafted with React for seamless interactivity, Tailwind CSS for a sleek and minimalistic design, and powered by the flexibility of Context API for state management, our platform delivers a personalized and dynamic shopping experience. With the reliability of Firebase integration for managing all data, enjoy user-friendly interface, and real-time updates.",
    techStack: ["Tailwindcss", "ReactJS", "ContextAPI", "Firebase"],
    images: [BU1, BU3, BU2, BU4],
    url: "https://b-uu.netlify.app/",
  },
  // {
  //   id: "03",
  //   name: "Sleekeasy",
  //   note: "Step into a world of personalized fashion experiences with our innovative booking web app. Powered by React for dynamic interactions, Tailwind CSS for a polished and stylish design, our platform redefines how you engage with fashion services. Whether it's scheduling appointments, reserving exclusive items, or accessing personalized consultations, our user-friendly interface ensures a smooth and tailored booking process. Elevate your fashion journey with ease and sophistication, all at your fingertips.",
  //   techStack: ["Tailwindcss", "ReactJS"],
  //   images: [SLEEK1, SLEEK2, SLEEK4, SLEEK3],
  //   url: "https://sleekeasy.netlify.app/",
  // },
  {
    id: "04",
    name: "Armourone",
    note: "Armourone is a React-based website for a dealer in a wide range of bike, boat, and motorcycle parts. Crafted for speed and style using Tailwind CSS, the user-friendly interface makes navigating through parts a breeze. Stay connected with our seamless communication feature powered by EmailJS, allowing you to inquire about and order parts effortlessly. Experience a visually appealing and responsive platform designed to cater to all your bike, boat, and motorcycle needs.",
    techStack: ["Tailwindcss", "ReactJS"],
    images: [AEMOURONE1, AEMOURONE2],
    url: "https://armourone.netlify.app/",
  },
];
