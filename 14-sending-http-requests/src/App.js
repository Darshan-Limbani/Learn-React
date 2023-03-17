import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

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

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMovieHandler() {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://swapi.dev/api/films/')

            if (!response.ok) {
                throw new Error('Something went Wrong!');
            }

            const data = await response.json();
            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.id,
                    title: movieData.title,
                    release: movieData.release_date,
                    openingText: movieData.opening_crawl
                }
            })
            setMovies(transformedMovies)
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
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

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
