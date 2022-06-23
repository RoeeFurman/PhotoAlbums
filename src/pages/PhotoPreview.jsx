import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { albumsService } from "../services/albums.service";
import useOnClickOutside from "../hooks/useOnClickOutside";

export const PhotoPreview = ({ match }) => {
  const history = useHistory();
  const cardRef = useRef();
  const [currPhoto, setCurrPhoto] = useState(null);

  useEffect(() => {
    console.log(match.params.photoId, "id");
    getPhotoDetails();
  }, []);

  useOnClickOutside(cardRef, () => exit());

  const getPhotoDetails = async () => {
    const photo = await albumsService.getPhotoById(match.params.photoId);
    setCurrPhoto(...photo);
  };

  const exit = () => {
    history.push(`/`);
  };

  return (
    <section className="photo-preview">
      <div className="photo-card" ref={cardRef}>
        <button className="exit" onClick={() => exit()}>
          X
        </button>
        {currPhoto && (
          <div className="details">
            <h1>
              Photo Title: <span>{currPhoto.title}</span>
            </h1>
            <img src={currPhoto.url} alt={currPhoto.title} loading="lazy" />
            <h1>
              Album Id: <span>{currPhoto.albumId}</span>
            </h1>
            <h2>
              Id: <span>{currPhoto.id}</span>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};
