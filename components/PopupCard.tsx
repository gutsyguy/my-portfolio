import React, { useState, useEffect } from "react";
import SimpleImageSlider from 'react-simple-image-slider'

function PopupCard({ children }:any) {

  const images = [
  { url: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg" },
  { url: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg" },
];




  return (
    <div
      className="d:w-[350px] h-auto md:h-[15rem] rounded-md"
    >
      <SimpleImageSlider
        width={1000}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default PopupCard;

