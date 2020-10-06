import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import List from '../components/List';
import SpinnerL from '../components/SpinnerL';
import Pagination from '../components/Pagination';
import './styles/Home.css';

const Home = () => {

    const [shows, setShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
    const [showSearch, setShowSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getData = () => {
        setLoading(true);
        setError(false);
        let getShows = `http://api.tvmaze.com/shows?page=${currentPage}`;
        let getSearch = `http://api.tvmaze.com/singlesearch/shows?q=${showSearch}`;
        let url
        isSearch ? url = getSearch : url = getShows;

        axios.get(url)
        .then(response => {
            setLoading(false);
            // console.log(response.data[0]);
            // console.log(response.data);
            isSearch ? setShows([response.data]) : setShows(response.data);
        })
        .catch(error => {
            setLoading(false);
            isSearch ? setError('Show not found') : setError('Ups! Try later please');
            console.log(error);
        })
    };

    const getDataAgain = () => {
        setCurrentPage(1);
        setIsSearch(false);
        setShowSearch('');
        setLoading(true);
        setError('');
    }

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
            {loading ?
                <SpinnerL /> 
                : error ? 
                    <div className="error__container">
                        <h1>{error}</h1>
                    </div> :
                    <div className="allShows__container">
                        {isSearch ?
                            <div className="allShowsBtn__container">
                                <button 
                                    className="allShowsBtn"
                                    onClick={getDataAgain}
                                >All shows</button>
                            </div>
                        :
                            <Pagination 
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                setLoading={setLoading}
                            />

                        }
                        <List 
                            shows={shows}
                        />
                        {isSearch ? null :
                            <Pagination 
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                setLoading={setLoading}
                            />
                        }
                    </div>    
            }
        </div>
    );
}
 
export default Home;