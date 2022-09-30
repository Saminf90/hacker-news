import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import ListNews from "./components/ListNews"
import Footer from "./components/Footer"
import Loading from './components/Loading'
import Pagination from './components/Pagination'


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true)
      fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
      ).then(data => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page, query, hitsPerPage]);
    
    if (error) return <p>Error!</p>;

  const updateQuery = (newQuery) => {
    setPage(0)
    setQuery (newQuery)
  }

  return (
    <>
      <Navbar updateQuery = {updateQuery} />
      {
        loading ?
          <Loading />

          :
          <div>
            <ListNews data={data} />
          </div>

      }
      <div className='page-bar'>
      <Pagination page={page} setPage={setPage} rangeLength={20} /> 
      </div>
      <Footer />
    </>
  )
}


export default App
