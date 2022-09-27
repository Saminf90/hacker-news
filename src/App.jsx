import { useState, useEffect } from 'react'
import './App.css'
// import Navbar from "./components/Navbar"
import ListNews from "./components/ListNews"
// import Footer from "./components/Footer"

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=tech")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
      ).then(data => {
        setData(data);
        console.log("Data Arrived", data)
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

  console.log("Data arrived after", data);

  return (
    <>
      {/* <Navbar /> */}
      <ListNews data={data} />
      {/* <Footer /> */}
    </>
  )
}


export default App
