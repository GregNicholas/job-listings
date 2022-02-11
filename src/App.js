import React, { useState, useEffect } from "react"
import Card from "./components/Card"
import FilterCard from "./components/FilterCard"
import './App.css'

function App() {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);
	
	const getJobs=()=>{
    fetch('data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setJobs(myJson)
      });
  	}
	
	useEffect(()=>{
      getJobs()
	},[])
	
  return (
    <div className="App">
      <header className="app_header">
	  </header>
		<div className="container">
			<section className={`card_list ${filters.length < 1 ? "list_margin" : ""}`}>
			  <FilterCard tags={filters} filters={filters} setFilters={setFilters} />
			  {jobs && jobs.length > 0 && jobs.map(job => {
				  return (
					  <Card key={job.id} filters={filters} setFilters={setFilters} job={job}/>
				  )
			  })}
			</section>
		</div>
    </div>
  );
}

export default App;
