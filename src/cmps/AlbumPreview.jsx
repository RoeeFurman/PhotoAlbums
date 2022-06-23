import React from "react";

export const AlbumPreview = ({ album, openPhoto }) => {
  return (
    <section className="album-preview" onClick={() => openPhoto(album.id)}>
      <div className="img-div">
        <img src={album.thumbnailUrl} alt={album.title} loading="lazy" />
      </div>
      <h2>{album.title}</h2>
      <h3>Id: {album.id}</h3>
      <div className="url-display">
        <h4>{album.url}</h4>
      </div>
    </section>
  );
};
