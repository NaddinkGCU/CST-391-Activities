import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from '../data/dataSource';

const EditAlbum = (props) => {

    let album = {
        title: '',
        artist: '',
        description: '',
        year: '',
        image: '',
        tracks: [],
    };

    let newAlbumCreation = true;

    // if album is in props then we are editing
    // set album to provided and set newAlbumCreation to false

    if (props.album) {
        album = props.album;
        newAlbumCreation = false;
    }

    const [albumTitle, setAlbumTitle] = useState(album.title);
    const [artist, setArtist] = useState(album.artist);
    const [description, setDescription] = useState(album.description);
    const [year, setYear] = useState(album.year);
    const [image, setImage] = useState(album.image);
    const navigate = useNavigate();


    const updateTitle = (event) => {
        setAlbumTitle(event.target.value);
    };
    
    const updateArtist = (event) => {
        setArtist(event.target.value);
    };

    const updateDescription = (event) => {
        setDescription(event.target.value);
    };

    const updateYear = (event) => {
        setYear(event.target.value);
    };

    const updateImage = (event) => {
        setImage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        console.log("props", props);
        console.log("props.album.id", props.album.id)
        console.log("props.albumId", props.albumId);
        console.log("album.albumId", album.albumId);
        const editedAlbum = {
            // album id is important for updating
            albumId: props.album.id,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };
        console.log("edited album", editedAlbum);

        saveAlbum(editedAlbum);

    };

    const saveAlbum = async (album) => {
        let response;
        if (newAlbumCreation){
            response = await dataSource.post('/albums', album);
        }
        else{
            console.log(album);
            response = await dataSource.put('/albums', album);
        }

        console.log(response);
        console.log(response.data);
        props.onEditAlbum(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }
    




    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{newAlbumCreation ? "Create New" : "Edit"} Album</h1>
                <div className="form-group">
                    <label htmlFor='albumTitle'>Album Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="albumTitle" 
                        placeholder='Enter Album Title'
                        onChange={updateTitle}
                        value={albumTitle}
                    />

                    <label htmlFor='albumArtist'>Artist</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="albumArtists" 
                        placeholder='Enter Album Artist'
                        onChange={updateArtist}
                        value={artist}
                    />

                    <label htmlFor='albumDescription'>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="albumDescriptoon" 
                        placeholder='Enter Album Description'
                        onChange={updateDescription}
                        value={description}
                    />

                    <label htmlFor='albumYear'>Year</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="albumYear" 
                        placeholder='Enter Album Year'
                        onChange={updateYear}
                        value={year}
                    />

                    <label htmlFor='albumImage'>Image</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="albumImage" 
                        placeholder='Enter Album Image'
                        onChange={updateImage}
                        value={image}
                    />


                </div>
                <div align='center'>
                    <button type='button' className='btn btn-light' onClick={handleCancel}>Cancel</button>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EditAlbum;