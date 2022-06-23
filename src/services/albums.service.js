
import axios from "axios";

export const albumsService = {
    query,
    getPhotoById,
    getAlbumsNumber
}

let _gAlbums = []

async function query(value) {
    const valueToLower = value?.toLocaleLowerCase()
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    _gAlbums = res.data
    if (value === '' || !value) return res.data
    return res.data.filter((album) =>
        album.title.toLocaleLowerCase().includes(valueToLower)
    )
}

async function getPhotoById(photoId) {
    return _gAlbums.filter(photo => photo.id === +photoId)
}

function getAlbumsNumber() {
    let res = []
    _gAlbums.forEach(album => {
        if (!res.includes(album.albumId)) res.push(album.albumId)
    })
    return res
}