import { useNavigate } from "react-router-dom";
import './Header.scss'

export function Header(){
  const navigate = useNavigate();

  function onClick(e){
    const route = e.target.innerText;
    route === 'Home' ? navigate('/'):navigate('/'+route);
  }
  return(
    <div className="nav">
      <a onClick={ (e) => onClick(e) }>Home</a>
      <a onClick={ (e) => onClick(e) }>Form</a>
      <a onClick={ (e) => onClick(e) }>List</a>
    </div>
  )
}