const TMDB_API_KEY = "808eca6992f030bb9ad782fe012b8438";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
    fetchThrillerMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=53`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
}

export default requests;