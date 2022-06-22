
import axios from "axios";

export const albumsService = {
    query,
    getPhotoById,
    getAlbumsNumber
}

async function query(value) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    if (value === '' || !value) return res.data
    return res.data.filter((album) =>
        album.title.toLocaleLowerCase().includes(value)
    )
}

async function getPhotoById(photoId) {
    const res = await query()
    return res.filter(photo => photo.id === +photoId)
}

function getAlbumsNumber(albums) {
    let res = []
    albums.forEach(album => {
        if (!res.includes(album.albumId)) res.push(album.albumId)
    })
    return res
}