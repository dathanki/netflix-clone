import React, { useState, useEffect } from 'react';
import axios from './../../utils/axios';
import requests from './../../utils/requests';
import './styles.css'

function Banner(props) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center bottom",
            }}
        >

            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* decription of film */}
                <h1 className="banner__description">
                    {truncate(movie.overview, 199)}
                </h1>

                {/* div w/2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner;
