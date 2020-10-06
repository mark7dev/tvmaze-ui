import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecursiveComponent from 'react-json-component';


const Show = () => {

    const [ data, setData ] = useState('');

    let { id } = useParams();

    useEffect(() => {
        axios(`http://api.tvmaze.com/shows/${id}`)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className="show__container">
            <RecursiveComponent 
                property={data}
                propertyName="root"
                excludeBottomBorder={false}
                emptyPropertyLabel="Property is empty"
                rootProperty={true}
                propertyNameProcessor={(name) => name + ": "}
            />
        </div>
    );
}
 
export default Show;