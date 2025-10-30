import React from 'react';

const Card = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.albumId);
        props.onClick(props.albumId, uri);
    }

    return (
        <div className="col">
            <div className="card h-100" style={{ width: '20vw' }}>
                <img src={props.imgURL} className="card-img-top" alt={props.albumTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleButtonClick(props.albumId, '/show/')}
                    >
                        {props.buttonText}
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick = {() => handleButtonClick(props.albumId, '/edit/')}
                    >  
                        Edit
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Card;