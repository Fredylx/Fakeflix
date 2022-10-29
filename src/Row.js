import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condiction/varaible
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        } 
        fetchData();
    }, []);

    return (
        <div className="Row">
            <h2>{title}</h2>
               
            {/* container -> posters */}
        </div>
    )
}

export default Row


/*    
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);  
            console.log(request);          
            //setMovies(request.data.results);
            return request;
            //https://api.themoviebd.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
        }
        fetchData();
    }, []);
*/
