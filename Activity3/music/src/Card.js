import React from 'react';
import ReactDOM from 'react-dom/client'

const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.imgURL} className="card-img-top" alt={props.albumTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button href="#" className="btn btn-primary">
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;