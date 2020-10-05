import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Components/Search';
import List from '../Components/List';
import Card from '../Components/Card';

const Home = () => {

    const [shows, setShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
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
        let getSearch = 'http://api.tvmaze.com/singlesearch/shows?q=girls';
        let url
        isSearch ? url = getSearch : url = getShows;
        // axios.get(`http://api.tvmaze.com/shows?page=${currentPage}`)
        axios.get(url)
        .then(response => {
            console.log(response.data);
            isSearch ? setShowFound(response.data) : setShows(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        getData();
    }, [currentPage]);

    return ( 
        <div>
            <Search />
            <p>{currentPage}</p>
            <button
                onClick={previousPage}
            >Last</button>
            <button
                onClick={nextPage}
            >Next</button>
            <Card 
                show={showFound}
            />
            <List 
                shows={shows}
            />
        </div>
    );
}
 
export default Home;