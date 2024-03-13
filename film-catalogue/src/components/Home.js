import React from "react";



//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components

//Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

//IMG

import noImg from '../images/no_image.jpg';

export const Home = () => {
  const {state, loading, error} = useHomeFetch();

  console.log(state);

  return <main>Home page</main>
};
