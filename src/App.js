import React, { useEffect, useState } from "react";
import Movie from './components/Movie';
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const GENRE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=";
const API_KEY = "&api_key=04c35731a5ee918f014970082a0088b1"
const genres = ['Trending', 'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'];

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('');
  const title = document.getElementById('title');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      setMovies(data.results)
      console.log(data)
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm){
      fetch(SEARCH_API+searchTerm)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      });

      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const fetchGenre = (API) => {
    fetch(API)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      });
  }

  const getData = (movieGenre) => {
    if(movieGenre==='Trending') {
      fetch(FEATURED_API)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      });
    }
    if(movieGenre==='Action') {
      fetchGenre(GENRE_API+'28'+API_KEY);
    }
    if(movieGenre==='Adventure') {
      fetchGenre(GENRE_API+'12'+API_KEY);
    }
    if(movieGenre==='Animation') {
      fetchGenre(GENRE_API+'16'+API_KEY);
    }
    if(movieGenre==='Comedy') {
      fetchGenre(GENRE_API+'35'+API_KEY);
    }
    if(movieGenre==='Crime') {
      fetchGenre(GENRE_API+'80'+API_KEY);
    }
    if(movieGenre==='Documentary') {
      fetchGenre(GENRE_API+'99'+API_KEY);
    }
    if(movieGenre==='Drama') {
      fetchGenre(GENRE_API+'18'+API_KEY);
    }
    if(movieGenre==='Family') {
      fetchGenre(GENRE_API+'10751'+API_KEY);
    }
    if(movieGenre==='History') {
      fetchGenre(GENRE_API+'36'+API_KEY);
    }
    if(movieGenre==='Horror') {
      fetchGenre(GENRE_API+'27'+API_KEY);
    }
    if(movieGenre==='Music') {
      fetchGenre(GENRE_API+'10402'+API_KEY);
    }
    if(movieGenre==='Mystery') {
      fetchGenre(GENRE_API+'9648'+API_KEY);
    }
    if(movieGenre==='Romance') {
      fetchGenre(GENRE_API+'10749'+API_KEY);
    }
    if(movieGenre==='Science Fiction') {
      fetchGenre(GENRE_API+'878'+API_KEY);
    }
    if(movieGenre==='TV Movie') {
      fetchGenre(GENRE_API+'10770'+API_KEY);
    }
    if(movieGenre==='Thriller') {
      fetchGenre(GENRE_API+'53'+API_KEY);
    }
    if(movieGenre==='War') {
      fetchGenre(GENRE_API+'10752'+API_KEY);
    }
    if(movieGenre==='Western') {
      fetchGenre(GENRE_API+'37'+API_KEY);
    }
    title.innerText= movieGenre + ' Movies'
  }


  return (
    <>
    <header>
      <span id="title">Trending Movies</span>
      <form onSubmit={handleOnSubmit}>
        <input 
        className="search"
        type="search" 
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
        />
      </form>
    </header>
    <div className="genreDiv">
      <ul className="genreList">
        {
          genres.map((value) => {
            return(
              <li><a href="#" className='genre' name={value} onClick={(e) => {getData(e.target.name)}}>{value}</a></li>
            )
          })
        }
        </ul>
      </div>
    <div className="movie-container">
        {movies.length >= 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie}/>
        ))}
    </div>
    </>
  );
}

export default App;
