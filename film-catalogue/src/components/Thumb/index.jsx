import React from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

import { Image } from "./Thumb.styles";

export const Thumb = ({image, movieId, clickable}) => {
  return <>
          {clickable ? (
            <Link to={`/${movieId}`}>
              <Image src={image} alt='movie-thumb'/>
            </Link>
          ) : (
           <Image src={image} alt='movie-thumb'/>
          )}
         </>
};