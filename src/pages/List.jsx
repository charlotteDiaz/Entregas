import { useNavigate } from 'react-router-dom'
import { ListNews } from '../Components/ListNews/ListNews';
import '../App.scss'

export function List() {
  return(
    <div className='holder'>
        <ListNews/>
    </div>
  )
}