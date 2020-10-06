import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {

    const [ data, setData ] = useState('');

    let { id } = useParams();

    useEffect(() => {
        axios(`http://api.tvmaze.com/shows/${id}`)
            .then(response => {
                console.log(response.data);
                setData(JSON.stringify(response.data, undefined, 2))
            })
            .catch(error => {
                console.log(error);
            })
        
    }, [])

    return ( 
        <div className="show__container">
            <textarea value={data} rows="60" cols="100"></textarea>
        </div>
    );
}
 
export default Show;