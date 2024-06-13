import React, { useEffect, useState } from 'react'
import './styles/TrnmntDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
function TrnmntDetails() {
    const params=useParams()
    const [tournament,setTournament]=useState([])
    useEffect(()=>{
        const id=params.id
        axios.get(`http://localhost:3000/tournaments/tournament/${id}`)
        .then(response=>{
            setTournament(response.data[0]);
            console.log(response.data[0])
        })
        .catch(err=>{
            console.log(err)
        })
    },[params.id])
  return (
    <div>
        <NavBar />
      <div class="tournament-card">
  <h2 class="tournament-name">{params.name}</h2>
  <div class="tournament-details">
    <p><strong>Start:</strong>{tournament.start_date}</p>
    <p><strong>End:</strong> {tournament.end_date}</p>
    <p><strong>Players:</strong> 64</p>
    <p><strong>Location:</strong>{tournament.location}</p>
  </div>
</div>

    </div>
  )
}

export default TrnmntDetails
