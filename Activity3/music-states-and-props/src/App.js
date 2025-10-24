import React, { useState } from "react";
import Card from "./Card";
import "./App.css";
const App = () => {
    const [albumList, setAlbumList] = useState([]);
    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText="OK"
                    imgURL={album.image}
                />
            );
        });
    };
    return <div className="d-flex flex-column align-items-center">{renderedList()}</div>;
};
export default App;
