import React from 'react';
import ReactStars from "react-rating-stars-component";
import './styles/Card.css';

const Card = ({ show }) => {

    const {name, image, genres, runtime, rating} = show;

    const calculateRuntime = n => {
        const hours = Math.floor(n / 60);  
        const minutes = n % 60;

        if(hours < 1) {
            return `${minutes} minutes`
        } else if(minutes < 1) {
            return `${hours}:00 hrs`
        } else {
            return `${hours}:${minutes} hrs`
        }
    }

    return (
        <div>
            { image ?
                <div className="card__container">
                    <div className="cardImage" style={{backgroundImage: `url(${image.medium})`}}></div>
                    <div className="info__container">
                        <h4>{name}</h4>
                        {
                            genres.length === 0 || !genres ? null :
                            <div className="genre__container">
                            {
                                genres.map((genre, index) => {
                                    return (
                                        <span key={index} className="genre">
                                            {genre}
                                        </span>
                                    )
                                })
                            }
                            </div>
                        }
                        <p className="runtime">Runtime: {calculateRuntime(runtime)}</p>
                        {
                            rating.average ?
                            <div className="rating__container">
                                <ReactStars
                                    size={20}
                                    value={rating.average/2}
                                    edit={false}
                                    isHalf={true}
                                />
                                <span className="ratingScore">{rating.average}</span>
                            </div> : null
                        }
                    </div>
                </div>
                : null
            }
        </div> 
    );
}
 
export default Card;