import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Define the type for a team
interface Team {
    tid: number;
    school: string;
    name: string;
    city: string;
    state: string;
}

function App() {
    const [count, setCount] = useState(0);
    const [teams, setTeams] = useState<Team[]>([]);

    // Fetch data from the JSON file
    useEffect(() => {
        fetch('/teams.json')
            .then((response) => response.json())
            .then((data) => setTeams(data.teams))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            {/* Existing Vite and React logos */}
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            {/* Heading */}
            <h1>March Madness</h1>

            {/* Count button (existing functionality) */}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            {/* Team List */}
            <div className="teams-container">
                <h2>NCAA Basketball Teams</h2>
                {teams.map((team) => (
                    <div key={team.tid} className="team-card">
                        <h3>{team.school}</h3>
                        <p><strong>Mascot:</strong> {team.name}</p>
                        <p><strong>Location:</strong> {team.city}, {team.state}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
