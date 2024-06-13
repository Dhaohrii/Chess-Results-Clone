import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import './styles/players.css'
import {useNavigate} from 'react-router-dom'
function Players() {
  const [players, setPlayers] = useState([]);
  const navigate=useNavigate()


  
  useEffect(() => {
    axios.get('http://localhost:3000/players/all')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleNewPlayerClick=function(){
    console.log('hello world')
  }

  return (
    <div>
    <NavBar />
    <div className="players-container">
      <div className="header-container">
        <h2>Players</h2>
        <button className="new-player-button" onClick={handleNewPlayerClick}>New Player</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} onClick={() => handlePlayerClick(player.id, player.name)}>
              <td>{player.name}</td>
              <td>{player.rating}</td>
              <td>{player.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );  

  function handlePlayerClick(playerId,playerName) {
    navigate(`/matches/player/${playerId}/${playerName}`)
  }
}

export default Players;
