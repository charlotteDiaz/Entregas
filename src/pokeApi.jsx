import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import { Button } from './Components/Button/Button'


function Poke(){
  const [ pokemon,setPokemon ] = useState({});

  async function randomHandler(){
    const randomId = Math.floor(Math.random() * (250 - 1) + 1)
    console.log(randomId);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
    setPokemon(res.data);
  }

  useEffect( () => {

  },[])

  return(
    <div className='App'>
      <Button onClick={ () => randomHandler() }>
        {'Random'}
      </Button>
      <img src={ pokemon.sprites.default_front }></img>
    </div>
  )
}

export default Poke;













