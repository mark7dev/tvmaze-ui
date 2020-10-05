import React from 'react';
import Card from './Card';

const List = ({shows}) => {
    return ( 
        <div>
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