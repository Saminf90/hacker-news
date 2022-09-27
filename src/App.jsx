import { useState, useEffect } from 'react'
import './App.css'
// import Navbar from "./components/Navbar"
// import ListNews from "./components/ListNews"
// import Footer from "./components/Footer"

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch("https://hn.algolia.com/api/v1/search?query=tech")
      .then((response) => response.json())
      .then((data) => {
      setData(data);
      setLoading(false);
      })
      .catch((error) => {
      setError(error);
      setLoading(false);
      });
    }, []);
    
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  // return (
  //    <div>
  //     <p>{JSON.stringify(data)}</p>
  //   </div>
  // );

  console.log(data);

  return (
    <>
    <Navbar />
    <ListNews/>
    <Footer/>
    </>    
  )
 }
 

export default App
