import { useState, useEffect } from 'react';
import './App.css';
import Heading from './Heading';
import TeamList from './TeamList';
import CollegeBasketballTeams from './CollegeBasketballTeams.json'; // Import JSON file


function App() {
    const [teams, setTeams] = useState<any[]>([]); // Type for teams (you can improve the type later)

    // Fetch data from the JSON file using useEffect
    useEffect(() => {
        // Directly set the teams from the imported JSON file
        setTeams(CollegeBasketballTeams.teams);
    }, []);
    return (
        <>
            {/* Heading Component */}
            <Heading />
            
            {/* Team List Component */}
            <TeamList teams={teams} />

            
        </>
    );
}

export default App;


