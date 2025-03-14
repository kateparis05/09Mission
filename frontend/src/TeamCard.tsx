import React from 'react';

interface TeamCardProps {
    team: {
        school: string;
        name: string;
        city: string;
        state: string;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    return (
        <div className="team-card">
            <h3>{team.school}</h3>
            <p><strong>Mascot:</strong> {team.name}</p>
            <p><strong>Location:</strong> {team.city}, {team.state}</p>
        </div>
    );
};

export default TeamCard;

