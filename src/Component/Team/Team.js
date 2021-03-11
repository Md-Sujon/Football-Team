import React from 'react';
import { Card, button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { strTeam, strCountry, strTeamBadge, idTeam } = props.teams;
    const styleTeam = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '20px',
        display: 'float-left'


    }
    return (

        

<div className="team-style ">

            <div style={styleTeam} className="col-md-6 my-6 team">

                <div className="row-md-4 my-4">
                    <Card style={{ width: '16rem' }}>

                        <Card.Body className="style">
                            <img style={{ width: '150px' }} src={strTeamBadge} alt="" />
                            <Card.Title>Name:{strTeam}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Country:{strCountry}</Card.Subtitle>
                           
                           <Link to={`/Team/${idTeam}`}><button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
                           
                           

                        </Card.Body>
                    </Card>

                </div>
            </div>

        </div>

        
    );
};

export default Team;