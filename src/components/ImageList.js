import React from "react";

import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {

   const imagesFinal = props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
   });

   return (
      <div className="image-list">{imagesFinal}</div>
   );
};

export default ImageList;