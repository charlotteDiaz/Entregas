import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './appRoutes';
import './App.scss'
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return(
      <BrowserRouter>
        <GlobalProvider>
          <Header/>
          <AppRoutes/>
        </GlobalProvider>
      </BrowserRouter>
  )
}

export default App
 