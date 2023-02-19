import React from 'react';
import Row from '../components/Row';
import Main from './Main';
import Requests from '../Request';
function Home() {
  return (
    <>
      <Main />
      <Row rowId='1' title='Trending' fetchUrl={Requests.fetchTrending} />
      <Row
        rowId='2'
        title='Comedy Movies'
        fetchUrl={Requests.fetchComedyMovies}
      />
      <Row
        rowId='3'
        title='Netflix Originals'
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row
        rowId='4'
        title='Documentaries'
        fetchUrl={Requests.fetchDocumentaries}
      />
      <Row
        rowId='5'
        title='Horror Movies'
        fetchUrl={Requests.fetchHorrorMovies}
      />
      <Row
        rowId='6'
        title='Romance Movies'
        fetchUrl={Requests.fetchRomanceMovies}
      />
    </>
  );
}

export default Home;
