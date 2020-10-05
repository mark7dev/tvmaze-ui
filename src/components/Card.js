import React from 'react';

const Card = ({show}) => {

    const {id} = show;

    return ( 
        <div>
            <p>{id}</p>
        </div>
    );
}
 
export default Card;