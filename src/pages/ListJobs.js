import React, { Component } from 'react';
import jobService from '../lib/job-service';

import Searchbar from '../components/Searchbar';
import SearchFilters from '../components/SearchFilters';
// import Navbar from '../components/Navbar';
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
  
  multiFilter = (name, value) => {
    let filteredJobs = [];
    if(name === 'bootcamp') {
      if (value === 'all') {
        filteredJobs = this.state.listOfJobs;
      } else {
        filteredJobs = this.state.listOfJobs.filter( job => {
          return (job.bootcamp === value)
        })
      }
    } else if (name === 'city') {
      if (value === 'all') {
        filteredJobs = this.state.listOfJobs;
      } else {
        filteredJobs = this.state.listOfJobs.filter( job => {
          return (job.city === value)
        })
      }
    } 
    this.setState({ jobsFiltered: filteredJobs })
  }


  render() {
    // console.log(this.state.listOfJobs);
    return (
      <div className="container">
        <section className="section">
          <div className="top-search-nav navbar is-fixed-top">
            <Searchbar filterByTerm={this.filterJobs} />
            <SearchFilters filterByProperty={this.multiFilter} />
            {/* <Navbar /> */}
          </div>

          <div className="results-list">
            <h3 className="title is-3">Jobs</h3>
            {
              this.state.jobsFiltered.map( (oneJob, index) => {
                return <JobCard key={index} {...oneJob} /> 
              })
            }
          </div>

          <BottomNav  />
        </section>
      </div>
    );
  }
}

export default ListJobs;
