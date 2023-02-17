import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import cardItems from "../../assets/logements";
import "../Logement/Logement.css";
import StarsColored from "../../components/starscolored";
import Caroussel from "../../components/caroussel/caroussel";
import Collapse from "../../components/collapse/collapse";
import Error from "../Error/Error";
import Footer from "../../components/Footer/Footer";
export default function Logement() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundItem = cardItems.find((c) => c.id === id);

    setItem(foundItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // redirect si foundItem is undefined
  if (!item) {
    return <Error />;
  }

  const listeEquipements = item.equipments.map((e) => <li key={e}>{e}</li>);
  return (
    <>
      <Header />
      <main>
      <Caroussel pictures={item.pictures}></Caroussel>
      <div className="content">
        <div className="bloc-left">
          <div className="location">
            <b>{item.title}</b>
            <p>{item.location}</p>
          </div>
          <div className="tags">
            <ul>
              {item.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bloc-right">
          <div className="NbRating" >
            <StarsColored  rating={item.rating} />
          </div>

          <div className="host">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="host" />
          </div>
        </div>
      </div>

      <div className="description">
        <Collapse texte={item.description} title="Description" />
        <Collapse texte={listeEquipements} title="Equipements" />
      </div>
      </main>
      <Footer />
    </>
  );
}