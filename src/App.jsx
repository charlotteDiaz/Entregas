import { useState } from 'react'
import { Button } from './Components/Button/Button';
import axios from 'axios';
import './App.css'

function App() {
  const [ breedArray,setBreedArray ] = useState(['']);
  const [ imgArray,setImgArray ] = useState(['']);
  const [ breedSearch,setBreedSearch ] = useState('');
  const [ show,setShow ] = useState(true);

  async function getAllHandler(){
    const array = [];
    try{ 
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');
      const breeds = res.data.message;
      for(const breed in breeds){
        array.push(breed);
      }
      setBreedArray(array);
      setShow(true);
    }catch(e){
      console.error(e);
    }
  }

  async function randomHandler(){
    try{
      let res;
      const array = [];
      if(breedSearch === ''){
        res = await axios.get('https://dog.ceo/api/breeds/image/random/3');
        setImgArray(res.data.message);
      }else{
        res = await axios.get(`https://dog.ceo/api/breed/${breedSearch}/images/random`);
        array.push(res.data.message);
        setImgArray(array);
      }
      setShow(false)
    }catch(e){
      console.error(e);
    }
  }
  
  async function getImagesHandler(){
    try{
      const res = await axios.get(`https://dog.ceo/api/breed/${breedSearch}/images`);
      setImgArray(res.data.message);
      setShow(false);
      
    }catch(e){
      console.error(e);
    }
  }

  function onBlurHandler(e){
    const value = e.target.value;
    setBreedSearch(value);
  }

  return (
    <div className="App">
      <Button onClick={ getAllHandler }>
        {'Get All'}
      </Button>
      <Button onClick={ randomHandler }>
        {'Random'}
      </Button>
      <input type='text' placeholder='Breed' onBlur={ (e) => onBlurHandler(e) }/>
      <Button onClick={ getImagesHandler }>
        {'Get Image'}
      </Button>
      <div className='card'>
        { show &&
          breedArray.map((element,index) => (
            <p key={`img${index}`} >{ element }</p>
          ))
        }
      </div>
      <div>
        {
          imgArray.map((element,index) => (
            <img key={`img${index}`} width='250' height='350'src={ element }/>
          ))
        }
      </div>
    </div>
  )
}

export default App
