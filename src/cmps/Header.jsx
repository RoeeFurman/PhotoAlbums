import React, { useState } from "react";

export const Header = ({ albumsNum, changeCurrAlbum }) => {
  const [albumPickerOpen, setAlbumPickerOpen] = useState(false);

  const changeAlbum = (num) => {
    changeCurrAlbum(num);
    setAlbumPickerOpen(!albumPickerOpen);
  };

  return (
    <section className="header">
      <div className="logo">
        <h1 className="logo-title">Photo Albums </h1>
        <img
          alt="Album"
          src="https://bayphoto.com/assets/img/products/thumbs/pacific-albums.png"
        />
      </div>
      {albumsNum?.length && (
        <div className="album-picker">
          <button onClick={() => setAlbumPickerOpen(!albumPickerOpen)}>
            <h2>Pick an Album</h2>
          </button>
          {albumPickerOpen && (
            <ul className="drop-down">
              {albumsNum.map((albumId) => (
                <li
                  key={albumId}
                  onClick={() => {
                    changeAlbum(albumId);
                  }}
                >
                  Album {albumId}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};
