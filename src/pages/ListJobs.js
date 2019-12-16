import React, { Component } from 'react';
import jobService from '../lib/job-service';

import Searchbar from '../components/Searchbar';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import BottomNav from '../components/BottomNav';


class ListJobs extends Component {
  state = {
    listOfJobs: [],
    jobsFiltered: []
  }

  componentDidMount() {
    jobService.getAll()
      .then((allJobs)=>{
        this.setState({ listOfJobs: allJobs, jobsFiltered: allJobs })
      })
      .catch((err) => console.log(err));
  }

  filterJobs = searchTerm => {
		console.log('search term', searchTerm);

		// apply lower case to the search term
		const lowerSearchTerm = searchTerm.toLowerCase();
		
		const filteredJobs = this.state.listOfJobs.filter( job => {
				// apply lower case to the job title
        const jobTitle = job.title.toLowerCase();
        const jobCompany = job.companyName.toLowerCase();
        const jobDescription = job.description.toLowerCase();
				// filter only the jobs that include the search term in their title, company or description
				return (jobTitle.includes(lowerSearchTerm) || jobCompany.includes(lowerSearchTerm) || jobDescription.includes(lowerSearchTerm));
		})
		this.setState({ jobsFiltered: filteredJobs })
	}

  render() {
    // console.log(this.state.listOfJobs);
    return (
      <div>
        <Searchbar filterByTerm={this.filterJobs} />
        <Navbar />
        <h1>All jobs</h1>
        {
          this.state.jobsFiltered.map( (oneJob, index) => {
            return <JobCard key={index} {...oneJob} /> 
          })
				}
        <BottomNav  />
      </div>
    );
  }
}

export default ListJobs;
