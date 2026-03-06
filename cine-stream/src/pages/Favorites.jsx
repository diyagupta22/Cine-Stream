import { useEffect,useState } from "react"
import MovieCard from "../components/MovieCard"

function Favorites(){

const [favorites,setFavorites] = useState([])

useEffect(()=>{

const fav = JSON.parse(localStorage.getItem("favorites")) || []

setFavorites(fav)

},[])

const removeFavorite = (id)=>{

const updated = favorites.filter(movie => movie.id !== id)

setFavorites(updated)

localStorage.setItem("favorites",JSON.stringify(updated))

}

return(

<div>

<h1>My Favorites ❤️</h1>

<div className="grid">

{favorites.map(movie=>(
<MovieCard
key={movie.id}
movie={movie}
removeFavorite={removeFavorite}
isFavorite={true}
/>
))}

</div>

</div>

)

}

export default Favorites
