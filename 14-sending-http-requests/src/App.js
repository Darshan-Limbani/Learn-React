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

    async function fetchMovieHandler() {
        setIsLoading(true)
        const response = await fetch('https://swapi.dev/api/films/')
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
        setIsLoading(false)
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && < MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && <p>No Movies Found...</p>}
                {isLoading && <p>Loading...</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
