
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  // const [movies,setMovies] = useState([]);
  return (
    <div className="App">
      {/* <MovieForm/>
      <MovieList/> */}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/form' element={<MovieForm/>}/>
          <Route path='/list' element={<MovieList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//What really brole my mind was that I didn't need to pass and lift state technically. Which in one sense makes sense because through the http request I'm grabbing that data, so I don't need to update it/left it if I'm pulling that data from somewhere else. In other words, the data is built in my component, but through it. I don't know what is industry standard, but the LMS has us doing lift
export default App;
