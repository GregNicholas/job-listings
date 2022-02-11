import React from "react"

function CardTags({ filters, setFilters, job }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]
  
  const handleClick = (e, tag) => {
	  e.stopPropagation()
	  if(filters.includes(tag)){
		  setFilters(prev => prev.filter(t => t !== tag))
	  } else {
		  setFilters(prev => [...prev, tag])
	  }
  }
	
  return (
    <div className="card_tags">
      {tags.map(tag => {
		  return (
			<div key={tag} className="tag" onClick={(e) => handleClick(e, tag)}>{tag}</div>
		  )
	  })}
    </div>
  );
}

export default CardTags;
