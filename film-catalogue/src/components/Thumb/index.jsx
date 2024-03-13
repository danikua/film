import React from "react";

import { Image } from "./Thumb.styles";

export const Thumb = ({image, movieId, clickable}) => {
  return <>
           <Image src={image} alt='movie-thumb'/>
         </>
};