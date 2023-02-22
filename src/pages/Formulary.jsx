import { useNavigate } from 'react-router-dom'
import { Form } from '../Components/Form/Form'
import '../App.scss'

export function Formulary(){
  const navigate = useNavigate();
  return(
    <div className='holder'>
      <Form/>
    </div>
  )
}