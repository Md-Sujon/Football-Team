import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import image from '../../image/female.png';
import imageMale from '../../image/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import ICON1 from '../../image/ICON1.png';
import ICON2 from '../../image/ICON2.png';
import ICON3 from '../../image/ICON3.png';
// import { Link } from 'react-router-dom';




// import Button from 'react-bootstrap';

const TeamDetail = () => {
  let { idTeam } = useParams();
  const [detail, setDetail] = useState([]);

  const { intFormedYear, strCountry,strTeamBanner, strSport,strInstagram,strGender, strTwitter,strDescriptionEN, strFacebook, strTeamBadge, strTeam } = detail;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setDetail(data.teams[0]))
  }, [idTeam])


  let teamImage;
  if (strGender === 'female') {
    teamImage = <img style={{ width: '300px' }} src={image} alt="" />
  }
  else {
    teamImage = <img style={{ width: '300px' }} src={imageMale} alt="" />
  }


  return (

    <div class="container strDescriptionEN">

      <div className="dynamic-header">
        <img src={strTeamBadge} alt="" />
       
        <h1 className="strTeam">{strTeam}</h1>
      </div>


      <div className="Team-Detail">
        <div class="col-md-6  my-6 ">
          <h1>Primer League</h1>
          <h5><FontAwesomeIcon icon={faChevronCircleRight} />  Founded:{intFormedYear}</h5>

          <h5><FontAwesomeIcon icon={faFlag} />  Country:{strCountry}</h5>

          <h5><FontAwesomeIcon icon={faFutbol} />  Sports Type:{strSport}</h5>

          <h5><FontAwesomeIcon icon={faMarsStroke} />  Gender:{strGender}</h5>

          
        </div>
        <div class="col-md-6 my-6 ">
          {
            teamImage
          }

        </div>
        
      </div>


      <p>{strDescriptionEN}</p>

      <div className="Icon-style">
        <div className="social-icon">

          <a  href={`https://${strFacebook}`} ><img src={ICON1} alt="" /></a>
          <a href={`https://${strTwitter}`}> <img src={ICON2} alt="" /></a>
          <a href={`https://${strInstagram}`}> <img src={ICON3} alt="" /></a>

        </div>
      </div>

    </div>


  );
};

export default TeamDetail;