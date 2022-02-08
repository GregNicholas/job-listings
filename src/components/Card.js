import React from "react"
import CardInfo from "./CardInfo"
import CardTags from "./CardTags"
import "../styles.css"

function Card({ job }) {
	const logoUrl = job.logo.slice(1)
	console.log(logoUrl)
	
  return (
    <div className="card">
      <img className="card_logo" src={`${process.env.PUBLIC_URL}/assets/${logoUrl}`} alt="insure"></img>
	  <CardInfo job={job}/>
	  <CardTags job={job} />
    </div>
  );
}

export default Card;
