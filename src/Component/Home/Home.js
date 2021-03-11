import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [team,setTeam]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setTeam(data.teams))
    },[])
    return (
        <div>
            
            {
                team.map(teams=><Team teams={teams} key="idTeam"></Team>)
            }
        </div>
    );
};

export default Home;