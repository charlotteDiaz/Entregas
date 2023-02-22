import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalState"

export function Home(){
  const {news, getNews} = useContext(GlobalContext);

  return(
    <>
    </>
  )
}