import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";

/*
const dummyMovies = [
    {
        id: 1,
        title: 'Some Dummy Movie',
        openingText: 'This is the opening text of the movie',
        releaseDate: '2021-05-18',
    },
    {
        id: 2,
        title: 'Some Dummy Movie 2',
        openingText: 'This is the second opening text of the movie',
        releaseDate: '2021-05-19',
    },
];
*/

const MOVIES_URL = 'https://react-http-7c896-default-rtdb.firebaseio.com/movies.json'

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            // const response = await fetch('https://swapi.dev/api/films/')
            const response = await fetch(MOVIES_URL)

            if (!response.ok) {
                throw new Error('Something went Wrong!');
            }

            let loadedMovies = [];
            const data = await response.json();

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }
            setMovies(loadedMovies)
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        fetchMovieHandler()
    }, [fetchMovieHandler]);

    async function addMovieHandler(movie) {

        const response = await fetch(MOVIES_URL, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        fetchMovieHandler(); //optional
    }

    let content = <p>No Movies Found...</p>
    if (movies.length > 0) {
        content = < MoviesList movies={movies}/>;
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>
    }


    return (<React.Fragment>
        <section>
            <AddMovie onAddMovie={addMovieHandler}/>
        </section>
        <section>
            <button onClick={fetchMovieHandler}>Fetch Movies</button>
        </section>
        <section>
            {content}
        </section>
    </React.Fragment>);
}

export default App;
