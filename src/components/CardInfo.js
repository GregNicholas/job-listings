import React from "react"

function CardInfo({ job }) {
	
  return (
    <div className="card_info">
      <div className="card_info_head">
		<span className="company">{job.company}</span>
		{job.new && <span className="highlight highlight_new">NEW!</span>}
		{job.featured && <span className="highlight highlight_featured">FEATURED</span>}
	  </div>
	  <h4 className="title">{job.position}</h4>
	  <div className="details">
		  <span>{job.postedAt}</span><span className="bullet">&bull;</span>
		  <span>{job.contract}</span><span className="bullet">&bull;</span>
		  <span>{job.location}</span>
	  </div>
    </div>
  );
}

export default CardInfo;
