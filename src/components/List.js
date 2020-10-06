import React from 'react';
import Card from './Card';
import './styles/List.css';

const List = ({shows}) => {
    return ( 
        <div className="list__container">
            {shows.map( show => (
                <div key={show.id}>
                    <Card 
                        show={show}
                    />
                </div>
            ))}
        </div>
    );
}
 
export default List;