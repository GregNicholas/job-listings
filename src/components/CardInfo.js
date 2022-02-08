import React from "react"

function CardInfo({ job }) {
	
  return (
    <div className="card_info">
      <div className="card_info_company">
		<span>{job.company}</span>
		{job.new && <span>NEW!</span>}
		{job.featured && <span>FEATURED</span>}
	  </div>
	  <h4 className="title">{job.title}</h4>
	  <div className="details">
		  <span>{job.postedAt}</span>
		  <span>{job.contract}</span>
		  <span>{job.location}</span>
	  </div>
    </div>
  );
}

export default CardInfo;
