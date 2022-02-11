import React, { useState } from "react"
import CardInfo from "./CardInfo"
import CardTags from "./CardTags"
import "../styles.css"

function Card({ filters, setFilters, job }) {
	const [selected, setSelected] = useState(false)
	const logoUrl = job.logo.slice(1)
	
	const handleClick = () => {
		setSelected(!selected)
	}
	
  return (
    <div className={`card ${selected ? "selected" : ""}`} >
	  <div className="card_start">
		  <img className="card_logo" src={`${process.env.PUBLIC_URL}/assets/${logoUrl}`} alt="insure"></img>
		  <CardInfo job={job} handleClick={handleClick}/>
	  </div>
	  <CardTags filters={filters} setFilters={setFilters} job={job} />
    </div>
  );
}

export default Card;
