import MovieCard from '../components/MovieCard'
import { useState } from 'react';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "23.06.2000." },
        { id: 2, title: "The Game", release_date: "31.09.2006." },
        { id: 3, title: "Inception", release_date: "20.12.2015." },
        { id: 4, title: "Harry Potter 2", release_date: "17.7.2020." }
    ]

    const handleSearch = () => {
        alert(searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
                <button type="submit" className="search-btn">Search</button>
            </form>
            

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home