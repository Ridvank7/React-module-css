import React from "react";
import Buton from "../buton/Buton";
import CardStyle from "./card.module.css";

function Card({ language, img, btnName }) {
  console.log(img, btnName, language);
  return (
    <div className={CardStyle.card}>
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img className={CardStyle.images} src={img} alt="" />
      <Buton btn={btnName} />
    </div>
  );
}

export default Card;
