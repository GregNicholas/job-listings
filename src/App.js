import React, { useState, useEffect } from "react"
import Card from "./components/Card"
import './App.css';

function App() {
	const [jobs, setJobs] = useState([]);
	
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
        <h1>LISTINGS</h1>
		<div className="container">
			<section className="card_list">
			  {jobs && jobs.length > 0 && jobs.map(job => {
				  return (
					  <Card key={job.id} job={job}/>
				  )
			  })}
			</section>
		</div>
    </div>
  );
}

export default App;
