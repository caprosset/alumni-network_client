import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SavedEventCard extends Component {

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
    const { _id, title, date, city, } = this.props;
    return (
      <div>
        <div className="saved-card columns is-flex is-vertical-center is-horizontal-center">

          <div className="column is-3 is-mobile">
            <p>
              <Link to={`/event/${_id}`}>{title}</Link>
            </p>
          </div>

          <div className="column is-3 is-mobile">
            <p>{this.formatDate(date)}</p>
          </div>

          <div className="column is-3 is-mobile">
            <p>{city}</p>
          </div>

          <div className="column is-3 is-mobile">
            <button className="button is-small is-outlined" onClick={() => this.props.unsaveEvent(this.props._id)}>Unsave</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SavedEventCard;