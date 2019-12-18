import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EventCard extends Component {

  formatDate = d => {
    let date = new Date(d);
    let dd = date.getDate(); 
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear(); 
    if(dd<10){dd='0'+dd} ;
    if(mm<10){mm='0'+mm};
    return d = dd+'/'+mm+'/'+yyyy;
  } 
  
  render() {
    // console.log('EVENT PROPS', this.props);
    const { image, _id, title, date, city, bootcamp } = this.props;
    return (
      <div className="result-card columns is-flex is-vertical-top is-horizontal-center">
        
        <div className="column is-3 is-mobile">
          <figure className="image is-64x64">
            <img src={image} alt="Image event" />
          </figure>
        </div>

        <div className="column is-3 is-mobile">
          <Link to={`/event/${_id}`}>
            <p>{title}</p>
          </Link>
          <p>{this.formatDate(date)}</p>
          <p>{city}</p>
        </div>

        <div className="column is-3 is-mobile">
          <p>{bootcamp}</p>
        </div>

        <div className="column is-3 is-mobile">
          <Link to={`/event/${_id}`}>
            <button className="button is-small is-outlined">See event</button>
          </Link>
        </div>

      </div>
    )
  }
}

export default EventCard;
