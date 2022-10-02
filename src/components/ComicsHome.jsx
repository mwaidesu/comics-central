import React from 'react'
import { comics} from "../data"
import ComicHome from './ComicHome'

const ComicsHome = () => {
  return (
    <div className="styled-container p-[20px] flex flex-wrap justify-between ">
        {comics.map(item =>(
            <ComicHome item ={item} key={item.id}/>
        ))}
    
    </div>
  )
}

export default ComicsHome
