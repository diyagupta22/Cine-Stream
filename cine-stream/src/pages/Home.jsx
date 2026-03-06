import { useState, useRef } from "react"
import MovieCard from "../components/MovieCard"
import useDebounce from "../hooks/useDebounce"

function Home() {

const [search,setSearch] = useState("")
const [mood,setMood] = useState("")
const [suggestedMovie,setSuggestedMovie] = useState(null)
const [visible,setVisible] = useState(10)
const observer = useRef()

const debouncedSearch = useDebounce(search,500)

const [movies] = useState([

{id:1,title:"The Batman",release_date:"2022",vote_average:8.2,poster_path:"/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
{id:2,title:"Avengers Endgame",release_date:"2019",vote_average:8.4,poster_path:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg"},
{id:3,title:"Joker",release_date:"2019",vote_average:8.4,poster_path:"/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
{id:4,title:"Spider Man No Way Home",release_date:"2021",vote_average:8.3,poster_path:"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"},
{id:5,title:"Interstellar",release_date:"2014",vote_average:8.6,poster_path:"/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
{id:6,title:"Inception",release_date:"2010",vote_average:8.8,poster_path:"/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"},
{id:7,title:"Titanic",release_date:"1997",vote_average:7.9,poster_path:"/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"},
{id:8,title:"Avatar",release_date:"2009",vote_average:7.8,poster_path:"/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"},
{id:9,title:"The Dark Knight",release_date:"2008",vote_average:9.0,poster_path:"/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
{id:10,title:"Doctor Strange",release_date:"2016",vote_average:7.5,poster_path:"/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"},

{id:11,title:"Iron Man",release_date:"2008",vote_average:7.9,poster_path:"/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"},
{id:12,title:"Thor Ragnarok",release_date:"2017",vote_average:7.9,poster_path:"/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"},
{id:13,title:"Captain America Civil War",release_date:"2016",vote_average:7.8,poster_path:"/kSBXou5Ac7vEqKd97wotJumyJvU.jpg"},
{id:14,title:"Black Panther",release_date:"2018",vote_average:7.3,poster_path:"/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"},
{id:15,title:"Ant Man",release_date:"2015",vote_average:7.3,poster_path:"/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg"},
{id:16,title:"Guardians of the Galaxy",release_date:"2014",vote_average:8.0,poster_path:"/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"},
{id:17,title:"Deadpool",release_date:"2016",vote_average:8.0,poster_path:"/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg"},
{id:18,title:"Logan",release_date:"2017",vote_average:8.1,poster_path:"/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg"},
{id:19,title:"The Matrix",release_date:"1999",vote_average:8.7,poster_path:"/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"},
{id:20,title:"John Wick",release_date:"2014",vote_average:7.9,poster_path:"/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"}

])

const filteredMovies = movies.filter(movie =>
movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
)

const lastMovieRef = (node)=>{

if(observer.current) observer.current.disconnect()

observer.current = new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){
setVisible(prev => prev + 10)
}

})

if(node) observer.current.observe(node)

}
const matchMovieFromMood = ()=>{

const text = mood.toLowerCase()

if(text.includes("sad")){
setSuggestedMovie("Inside Out")
}
else if(text.includes("action")){
setSuggestedMovie("John Wick")
}
else if(text.includes("love")){
setSuggestedMovie("Titanic")
}
else if(text.includes("space")){
setSuggestedMovie("Interstellar")
}
else if(text.includes("fun")){
setSuggestedMovie("Toy Story")
}
else{
setSuggestedMovie("The Batman")
}

}
const addFavorite = (movie)=>{

const fav = JSON.parse(localStorage.getItem("favorites")) || []

fav.push(movie)

localStorage.setItem("favorites",JSON.stringify(fav))

}

return(

<div>

<h1>Movie Explorer</h1>

<input
placeholder="Describe your mood..."
value={mood}
onChange={(e)=>setMood(e.target.value)}

style={{
padding:"10px",
width:"300px",
marginBottom:"20px",
marginLeft:"10px",
borderRadius:"8px"
}}
/>
<button
onClick={matchMovieFromMood}
style={{
padding:"10px",
marginLeft:"10px",
cursor:"pointer"
}}
>
Find Movie 🎬
</button>
{suggestedMovie && (
<h2 style={{marginBottom:"20px"}}>
Recommended Movie: {suggestedMovie}
</h2>
)}
<div className="grid">

{filteredMovies.slice(0,visible).map((movie,index)=>{

if(index === visible-1){

return(
<div ref={lastMovieRef} key={movie.id}>
<MovieCard movie={movie} addFavorite={addFavorite}/>
</div>
)

}

return(
<MovieCard key={movie.id} movie={movie} addFavorite={addFavorite}/>
)

})}

</div>

</div>

)

}

export default Home