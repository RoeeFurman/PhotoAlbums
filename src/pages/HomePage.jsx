import React, { useEffect, useState } from "react";
import { albumsService } from "../services/albums.service";
import { AlbumsList } from "../cmps/AlbumsList";
import { Header } from "../cmps/Header";
import { PhotosFilter } from "../cmps/PhotosFilter";

export const HomePage = () => {
  const [albums, setAlbums] = useState();
  const [albumToDisplay, setalbumToDisplay] = useState(null);
  const [albumsNum, setAlbumsNum] = useState();
  const [albumPickerOpen, setAlbumPickerOpen] = useState(false);
  const [currAlbum, setCurrAlbum] = useState(1);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    loadAlbums(filterBy);
    console.log(albumsNum);
  }, [filterBy]);

  const loadAlbums = async (filterBy) => {
    const albums = await albumsService.query(filterBy);
    setAlbums(albums);
    setAlbumsNum(albumsService.getAlbumsNumber(albums));
    setalbumToDisplay(albums);
  };

  const changeCurrAlbum = (num) => {
    setCurrAlbum(num);
    setAlbumPickerOpen(!albumPickerOpen);
  };

  const setFilter = (filter) => {
    setFilterBy(filter);
  };

  return (
    <section className="home-page">
      <Header albumsNum={albumsNum} changeCurrAlbum={changeCurrAlbum} />
      <div className="secondary-title">
        <div className="album-title">Album {currAlbum}</div>
        <PhotosFilter setFilter={setFilter} />
      </div>
      {!albums.length && (
        <h1 className="display-title">No photos to display, try again</h1>
      )}
      {albums && (
        <AlbumsList
          albums={albums?.filter((album) => album.albumId === currAlbum)}
        />
      )}
    </section>
  );
};
