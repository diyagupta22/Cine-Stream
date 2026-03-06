function MovieCard({ movie, addFavorite, removeFavorite, isFavorite }) {

return(

<div className="movie-card">

<img
loading="lazy"
src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
alt={movie.title}
/>

<h3>{movie.title}</h3>

<p>{movie.release_date}</p>

<p>⭐ {movie.vote_average}</p>

{isFavorite ? (

<button onClick={()=>removeFavorite(movie.id)}>
❌ Remove
</button>

) : (

<button onClick={()=>addFavorite(movie)}>
❤️ Add
</button>

)}

</div>

)

}

export default MovieCard