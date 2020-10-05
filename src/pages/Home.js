import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import List from '../components/List';
import Card from '../components/Card';

const Home = () => {

    const [shows, setShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
    const [showSearch, setShowSearch] = useState('');
    const [showFound, setShowFound] = useState({});

    const nextPage = () => {
        let next = currentPage + 1;
        setCurrentPage(next);
    }

    const previousPage = () => {
        let previuos = currentPage - 1;
        setCurrentPage(previuos);
    }

    const getData = () => {
        // let getShows = 'http://api.tvmaze.com/shows?page=203';
        let getShows = `http://api.tvmaze.com/shows?page=${currentPage}`;
        let getSearch = `http://api.tvmaze.com/singlesearch/shows?q=${showSearch}`;
        let url
        isSearch ? url = getSearch : url = getShows;

        axios.get(url)
        .then(response => {
            console.log(response.data[0]);
            console.log(response.data);
            isSearch ? setShowFound(response.data) : setShows(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        getData();
    }, [currentPage, showSearch]);

    return ( 
        <div>
            <Search 
                setShowSearch={setShowSearch}
                setIsSearch={setIsSearch}
            />
            <p>{currentPage}</p>
            <button
                onClick={previousPage}
            >Last</button>
            <button
                onClick={nextPage}
            >Next</button>
            {
                isSearch ?
                <Card 
                    show={showFound}
                /> :
                <List 
                    shows={shows}
                />
            }
        </div>
    );
}
 
export default Home;