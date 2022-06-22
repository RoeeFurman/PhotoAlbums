import React from "react";
import { AlbumPreview } from "../cmps/AlbumPreview";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { PhotoPreview } from "../pages/PhotoPreview";

export const AlbumsList = ({ albums }) => {
  const history = useHistory();

  const openPhoto = (id) => {
    history.push(`/${id}/`);
  };

  return (
    <section className="albums-list">
      {albums.map((album) => (
        <AlbumPreview key={album.id} album={album} openPhoto={openPhoto} />
      ))}
      <Route path="/:photoId/" component={PhotoPreview} />
    </section>
  );
};
