import React from "react"

function CardTags({ job }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]
	
  return (
    <div className="card_tags">
      {tags.map(tag => {
		  return (
			<div className="tag">{tag}</div>
		  )
	  })}
    </div>
  );
}

export default CardTags;
