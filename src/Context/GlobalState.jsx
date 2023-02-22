import axios from 'axios';
import { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

export const GlobalContext = createContext();

const initialState = {
  news:[]
} 

export const GlobalProvider = ({children}) =>{
  const [state,dispatch] = useReducer(AppReducer,initialState);

  const  getNews = async () => {
    const res = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=DJlIulcpDid4yAukhQjYEZ9sEAKq9gLG');
    dispatch({
      type: 'GET_NEWS',
      payload: res.data.results,
    });
  };
  return(
    <GlobalContext.Provider 
      value={{
        news: state.news,
        getNews,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
 