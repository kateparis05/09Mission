// import React from 'react';
// import TeamCard from './TeamCard';
//
// interface Team {
//     tid: number;
//     school: string;
//     name: string;
//     city: string;
//     state: string;
// }
//
// interface TeamListProps {
//     teams: Team[];
// }
//
// const TeamList: React.FC<TeamListProps> = ({ teams }) => {
//     return (
//         <div className="teams-container">
//             <h2>NCAA Basketball Teams</h2>
//             {teams.map((team) => (
//                 <TeamCard key={team.tid} team={team} />
//             ))}
//         </div>
//     );
// };
//
// export default TeamList; 

// TeamList.tsx
import React from 'react';
import './TeamList.css'; // We'll create a separate CSS file for styling

interface Team {
    tid: number;
    school: string;
    name: string;
    city: string;
    state: string;
}

interface TeamListProps {
    teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
    return (
        <div className="team-list">
            {teams.map((team) => (
                <div key={team.tid} className="team-card">
                    <h3 className="school-name">{team.school}</h3>
                    <p className="mascot-name"><strong>Mascot:</strong> {team.name}</p>
                    <p className="team-location"><strong>Location:</strong> {team.city}, {team.state}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamList;


