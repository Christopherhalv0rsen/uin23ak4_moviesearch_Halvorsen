import React, {useEffect, useState} from 'react';
import Layout from './components/Layout';
import './css/main.css';

function App() {
  const [sok, sokeFunksjon] = useState('');
  const [film, setfilm] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const handleInputChange = (event) => {
    sokeFunksjon(event.target.value);
  };

  async function info(sok) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b56c90e7&s=${sok}`);    //forelesning fra foreleser om async og API-behandling 21/24/28.02
    const data = await response.json();
    if (data.Search) {
      const filmPromises = data.Search.map (async (result) =>{
        const filmRespons = await fetch(`https://www.omdbapi.com/?apikey=b56c90e7&i=${result.imdbID}&plot=full`);
        

        const filmData = await filmRespons.json();
        return { ...result, year: filmData.Year, ...filmData };

      });
      const film = await Promise.all(filmPromises); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
      setfilm(film);
    } else {
      setfilm([]);
    }
    };

    useEffect(() => {
      if (firstRender){
        setFirstRender(false);
        info('james bond '); //https://www.w3schools.com/react/react_useeffect.asp

      } else if (sok.length >=3){
        info(sok);
      }
    }, [sok, firstRender]);

    return (
      <Layout film = {film} sokeFunksjon = {sokeFunksjon} handleInputChange = {handleInputChange}/>
    );
  }

  export default App;
  
  //webtricksLMS 