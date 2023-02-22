import { useNavigate } from 'react-router-dom'
import './Form.scss'

export function Form(){
  const navigate = useNavigate();
  return(
    <div className='card'>
      <h1>Write your own story</h1>
      <h4>Tell us about you, write a resume with your story an upload a photo related.</h4>
      <form>
        <label for='title'>Title:</label>
        <input id='title' type='text'></input>
        <label for='abstract'>Abstract:</label>
        <textarea id='abstract' type='text' rows='10' columns='30'></textarea>
        <label for='srcImg'>URL Image:</label>
        <input id='srcImg' type='text'></input>
        <label for='byLine'>Author:</label>
        <input id='byLine' type='text'></input>
        <input type='submit' value='send' onClick={() => navigate('/list')}></input>
      </form>
    </div>
  )
}

