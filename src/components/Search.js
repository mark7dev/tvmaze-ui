import React, { useState } from 'react';
import './styles/Search.css';

const Search = ({setShowSearch, setIsSearch}) => {

    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const onKeyDown = e => {
        if(e.keyCode === 13 && search) {
            searchAction();
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        searchAction();
    }

    const searchAction = () => {
        setShowSearch(search);
        setIsSearch(true);
        setSearch('');
    }

    return ( 
        <div className="search__container">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Show's name"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}    
                />
                <input
                    type="submit"
                    value="Search"
                    disabled={!search}
                />
            </form>
        </div>
    );
}
 
export default Search;