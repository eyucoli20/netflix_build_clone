import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
      <Row
          title="NETFLIX ORGINALS"
          fetchUrl={requests.fetchNetflixOrginal}
          isLargeRow ={true}  
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreading} 
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow}  />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />

    </>
  )
}

export default RowList
