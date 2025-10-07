import React from 'react';
import ReactDOM from 'react-dom/client'

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem', margin: '20px'}}>
            <img src={ props.imgURL } className="card-img-top" alt="title"/>
            <div className="card-body">
                <h5 className="card-title">{ props.albumTitle }</h5>
                <p className="card-text">
                    { props.albumDescription }
                </p>
                <button href="#" className="btn btn-primary">
                    { props.buttonText }
                </button>
                
            </div>
        </div>
    );
}

export default Card;