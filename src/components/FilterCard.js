import React from "react"
import "../styles.css"

function FilterCard({ filters, setFilters }) {
	const tags = filters
	const hasFilters = filters.length > 0;
	
	const deleteOneTag = (tag) => {
		setFilters(tags.filter(t => t !== tag))
	}
	
  return (
	  <>
	  { hasFilters && 
	  	<div className="card card_filter">
		  <div className="card_tags">
		  {tags.map(tag => {
			  return (
				  <div className="tag_list" onClick={() => deleteOneTag(tag)}><div key={tag} className="tag">{tag}</div><span className="tag_x">&#10005;</span></div>
			  )
		  })}
		  </div>
		  <div className="clear" onClick={() => setFilters([])}>Clear</div>
	    </div>
	  }
	</>
  );
}

export default FilterCard;
