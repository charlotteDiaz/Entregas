import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import './ListNews.scss'

export function ListNews() {
  const { news, getNews } = useContext(GlobalContext);
  const [count, setCount ] = useState(1);
  const [n,setNew] = useState({
    title:'Tesla to Recall 362,000 Cars With Its ‘Full Self Driving’ System',
    abstract:'A federal auto safety agency said the technology can cause crashes, but said the company was unaware of any deaths or injuries caused by the flaws.',
    multimedia: [{url:'https://static01.nyt.com/images/2023/02/16/multimedia/16SELF-DRIVING-fjhw/16SELF-DRIVING-fjhw-superJumbo.jpg'}],
    byline: 'By Neal E. Boudette'
  });

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    count > 1 ?  setNew(news[count]) : ' ';
  },[count])

  function onClickHandler(e){
    e.stopPropagation();
    const direction = e.target.id;
    if(direction === 'left'){
      count - 1 <= 0 ? setCount(30):setCount(count - 1);
    }
    if(direction === 'right'){
      count + 1 > 30 ? setCount(1):setCount(count + 1);
    }
  }

  return (
    <div className='cardList'>
      <div id='left' className='arrow' onClick={(e) => onClickHandler(e)}>
        <div  className='left'>
          <span></span>
        </div>
      </div>
      <div className='container'>
        <div>
          <img src={n.multimedia[0].url}>
          </img>
          <h6>{n.byline}</h6>
        </div>
        <h1>{n.title}</h1>
        <div>
          <a>
            {n.abstract}
          </a>
        </div>
      </div>
      <div id='right' className='arrow' onClick={(e) => onClickHandler(e)}>
        <div className='right'>
          <span></span>
        </div>
      </div>
    </div>
  )
}