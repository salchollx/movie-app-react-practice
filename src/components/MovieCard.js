
function MovieCard({movie}){

    function onFavoriteClick(){
        alert("clicked")
    }

    return(
        <div className="movie-card">
            <div classnAME="movie-poster">
                <img src={movie.url} alt={movie.title} className="movie-image"/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤️
                    </button>
                </div>
            </div>        
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieCard;