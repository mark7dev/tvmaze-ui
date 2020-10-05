import React from 'react';
import './styles/Search.css';

const Search = () => {
    return ( 
        <div className="search__container">
            <input type="text" placeholder="Show's name"/>
            <button>Search</button>
        </div>
    );
}
 
export default Search;