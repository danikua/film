import React from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

import { IMAGE_BASE_URL, POSTER__SIZE } from "../config";

import { BreadCrumb } from "./BreadCrumb";
import { FilmsGrid } from "./FilmsGrid";
import Spinner from "./Spinner";
import { MovieInfo } from "./MovieInfo";

import { useMovieFetch } from "../Hooks/useMovieFetch";

import noImg from '../images/no_image.jpg';
 
export const Movie = () => {
  const {movieId} = useParams();

  const {state: movie, loading, error} = useMovieFetch(movieId);

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
    </>
  )
};