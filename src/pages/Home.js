import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Components/Search';
import List from '../Components/List';
import Card from '../Components/Card';

const Home = () => {

    const [shows, setShows] = useState([]);

    const getShows = () => {
        axios.get('http://api.tvmaze.com/shows?page=1')
        .then(response => {
            console.log(response.data);
            setShows(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        getShows();
    }, [])

    return ( 
        <div>
            <Search />
            <List 
                shows={shows}
            />
        </div>
    );
}
 
export default Home;