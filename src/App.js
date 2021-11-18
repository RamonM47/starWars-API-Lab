import React, { useEffect, useState } from 'react'
import {getAllStarships } from './sw-api.js'
import { Link } from 'react-router-dom'

const AllStarships = (props) => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(allStarships => setAllStarships(allStarships.results))
  },[])

  return (
    <div>'
      <h1>Starships</h1>
      {allStarships.map((allStarship, idx) => {
        return (
        <h3 key={idx}>
          {allStarship.name}
        </h3>
        )  
      }) 
    }
    </div>
  )
    
}
 
export default AllStarships;