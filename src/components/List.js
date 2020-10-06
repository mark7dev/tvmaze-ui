import React from 'react';
import Card from './Card';
import './styles/List.css';
import { Link } from 'react-router-dom';

const List = ({shows}) => {
    return ( 
        <div className="list__container">
            {shows.map( show => (
                <div key={show.id}>
                    <Link to={`/${show.id}`} style={{ textDecoration: 'none' }}>
                        <Card 
                            show={show}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default List;