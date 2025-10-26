import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
// import albums from "./albums.json";
import SearchForm from "./SearchForm";
import dataSource from "./dataSource";

const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);

    let refresh = false;

    const updateSearchResults = (phrase) => {
        console.log('Search phrase is ' + phrase);
        setSearchPhrase(phrase);
    }


    useEffect(() => {
        loadAlbums();
    }, [refresh]);

    const loadAlbums = async () => {
        const response = await dataSource.get('/albums');

        setAlbumList(response.data);
        console.log(response.data);
    }

    const renderedList = () => {
        return albumList.map((album) => {
            if (
                album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                searchPhrase === ''
            )
            return (
                <Card
                    key={album.id}
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText="OK"
                    imgURL={album.image}
                />
            );
            // else console.log('Does not match ' + searchPhrase);
        });
    };
    return (
        <div>
            <div className='container'>
                <SearchForm onSubmit={updateSearchResults}/>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {renderedList()}
                </div>
            </div>
        </div>
    );
};
export default App;
