import React, { useState } from "react";
import "./MovieApp.css";

const movieData = [
  { id: 1, title: "Inception", year: 2010, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOujYfdFr4POi7o2g2JJvXzTiDStOE6zZBP5utUxX7UhpfGwqytTuvvfI&s=10" },
  { id: 2, title: "Interstellar", year: 2014, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1t_7mM-ShevNbBXzjOR5LNTcMMX-cdzhCbvyR7m7GvfftSd6yT81SO0&s=10" },
  { id: 3, title: "The Dark Knight", year: 2008, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ICBQvtMyecftSWSit2bpFY97G-Ysn6Wj8U0rjLTCTtxJIqwF1AfQ1_k&s=10" },
  { id: 4, title: "Tenet", year: 2020, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAka1EGOsfx0Z6SzSxbpJ5NsRvv7299_wPsEl5iK_Ds9R6kemQPL2P1N8&s=10" },
];


function MovieApp() {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavourite = (movie) => {
    if (favourites.includes(movie.id)) {
      setFavourites(favourites.filter((favId) => favId !== movie.id));
    } else {
      setFavourites([...favourites, movie.id]);
    }
  };

  const favouriteMovies = movieData.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div className="movie-app">
      <h2>🎬 Movie Database Mini App</h2>
      <div className="search-bar">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={() => setSearch("")}>Reset</button>
      </div>
      {/* Movie List */}
      <div>
        <h3>{search ? "Search Results:" : "All Movies:"}</h3>
        {filteredMovies.length === 0 ? (
          <p className="no-results">No movies found for "{search}".</p>
        ) : (
          <ul>
            {filteredMovies.map((movie) => (
              <li key={movie.id} className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <h4>{movie.title} ({movie.year})</h4>
                  <button
                    className={`favourite-btn ${favourites.includes(movie.id) ? "active" : "inactive"
                      }`}
                    onClick={() => toggleFavourite(movie)}
                  >
                    {favourites.includes(movie.id) ? "Unfavourite" : "Favourite"}
                  </button>
                </div>
              </li>

            ))}
          </ul>
        )}
      </div>


      {/* Favourite Movies Section */}
      {favouriteMovies.length > 0 && (
        <div>
          <h3>⭐ Favourite Movies</h3>
          <ul>
            {favouriteMovies.map((movie) => (
              <li key={movie.id} className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <h4>{movie.title} ({movie.year})</h4>
                  <button
                    className={`favourite-btn ${favourites.includes(movie.id) ? "active" : "inactive"
                      }`}
                    onClick={() => toggleFavourite(movie)}
                  >
                    {favourites.includes(movie.id) ? "Unfavourite" : "Favourite"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieApp;
