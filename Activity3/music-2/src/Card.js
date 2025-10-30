import React from 'react';

const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.imgURL} className="card-img-top" alt={props.albumTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.onClick(props.albumId)}
                    >
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;