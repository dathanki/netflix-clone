import './App.css';

// components
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

// utils
import requests from './utils/requests';


function App() {
  return (
    <div className="app">
      {/* Navbar component */}
      <Navbar />

      {/* Banner component*/}
      <Banner />

      {/* Rows with Movie genres */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Adventure Movies"
        fetchUrl={requests.fetchAdventureMovies}
      />
      <Row title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Science-Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Thriller Movies"
        fetchUrl={requests.fetchThrillerMovies}
      />
      <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />


    </div>
  );
}

export default App;
