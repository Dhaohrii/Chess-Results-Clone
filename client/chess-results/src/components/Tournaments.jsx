import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import './styles/Tournaments.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/tournaments/all')
      .then(response => {
        setTournaments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); 

  const getStatus = (startDate) => {
    return moment(startDate).isBefore(moment()) ? 'Ended' : 'Open';
  };
  const handleNewTournamentClick=function(){
    console.log("veryHappy")
  }
  return (
    <div>
    <NavBar />
    <div className="tournaments-container">
      <div className="header-container">
        <h2>Tournaments</h2>
        <button className="new-tournament-button" onClick={handleNewTournamentClick}>New Tournament</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map((tournament) => (
            <tr key={tournament.id} onClick={() => handleTournamentClick(tournament.id, tournament.name)}>
              <td>{tournament.name}</td>
              <td>{tournament.start_date.slice(0, 10)}</td>
              <td>{getStatus(tournament.start_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )  

  function handleTournamentClick(tournamentId,tournamentName) {
      navigate(`/tournament/${tournamentId}/${tournamentName}`)
  }
}

export default Tournaments;
