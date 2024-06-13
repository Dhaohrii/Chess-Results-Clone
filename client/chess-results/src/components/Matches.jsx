import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function Matches() {
    const params = useParams();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/matches/match/${params.id}`);
                setMatches(response.data);
            } catch (error) {
                console.log('Error fetching matches:', error);
            }
        };

        fetchData();

        
    }, [params.id]);

    return (
        <div>
            <NavBar />
            <div className="player-matches-container">
            <h2>Latest Matches of Player {params.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tournament</th>
                        <th>White Player</th>
                        <th>Black Player</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match) => (
                        <tr key={match.id}>
                            <td>{match.tournament_name}</td>
                            <td>{match.player1_name}</td>
                            <td>{match.player2_name}</td>
                            <td>{match.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Matches;
