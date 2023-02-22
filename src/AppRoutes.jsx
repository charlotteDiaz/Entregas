import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home'
import { List } from './pages/List'
import { Formulary } from './pages/Formulary';

export function AppRoutes(){
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Formulary />,
        path: '/form',
      },
      {
        element: <List />,
        path: '/list',
      }
    ]
  );
}
