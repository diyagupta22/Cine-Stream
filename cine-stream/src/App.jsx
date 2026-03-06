import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App(){

  return(

    <BrowserRouter>

      <nav style={{
        display:"flex",
        gap:"20px",
        marginBottom:"20px",
        fontSize:"18px"
      }}>

        <Link to="/">Home</Link>

        <Link to="/favorites">Favorites</Link>

      </nav>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/favorites" element={<Favorites/>} />

      </Routes>

    </BrowserRouter>

  )
}

export default App
