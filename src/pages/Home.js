import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import List from '../components/List';
import Card from '../components/Card';
import './styles/Home.css';

const Home = () => {

    const [shows, setShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
    const [showSearch, setShowSearch] = useState('');
    const [showFound, setShowFound] = useState({});
    const [loading, setLoading] = useState(true);

    const nextPage = () => {
        let next = currentPage + 1;
        setCurrentPage(next);
    }

    const previousPage = () => {
        let previuos = currentPage - 1;
        setCurrentPage(previuos);
    }

    const getData = () => {
        setLoading(true);
        // let getShows = 'http://api.tvmaze.com/shows?page=203';
        let getShows = `http://api.tvmaze.com/shows?page=${currentPage}`;
        let getSearch = `http://api.tvmaze.com/singlesearch/shows?q=${showSearch}`;
        let url
        isSearch ? url = getSearch : url = getShows;

        axios.get(url)
        .then(response => {
            setLoading(false);
            console.log(response.data[0]);
            console.log(response.data);
            isSearch ? setShowFound(response.data) : setShows(response.data);
            setShows(response.data);
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        })
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, showSearch]);

    return ( 
        <div>
            <Search 
                setShowSearch={setShowSearch}
                setIsSearch={setIsSearch}
            />
            {
                isSearch && !loading ?
                <Card 
                    show={showFound}
                /> :
                <div className="allShows__container">
                    <div className="pagination__container">
                        <button 
                            className="btnPag"
                            onClick={previousPage}
                        >Previous</button>
                        <p className="currentPage">Page {currentPage}</p>
                        <button
                            className="btnPag"
                            onClick={nextPage}
                        >Next</button>
                    </div>
                    <List 
                        shows={shows}
                    />
                    <div className="pagination__container">
                        <button 
                            className="btnPag"
                            onClick={previousPage}
                        >Previous</button>
                        <p className="currentPage">Page {currentPage}</p>
                        <button
                            className="btnPag"
                            onClick={nextPage}
                        >Next</button>
                    </div>
                </div>    
            }
        </div>
    );
}
 
export default Home;