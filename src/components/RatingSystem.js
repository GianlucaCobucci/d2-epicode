import React from 'react'
import { StarFill } from "react-bootstrap-icons";
/* per ogni stella deve mostrarmi una stella */
/* rate è un umero e deve essere collegato a stars */

const RatingSystem = ({stars}) => { //accetta una props, il numero di stelle
  return (
    <>
        {
           [...Array(stars)].map((id) => {
            return <StarFill key={id}/>
           })
        }
    </>
  )
}

export default RatingSystem
