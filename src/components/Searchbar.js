import React, { Component } from 'react';


class Searchbar extends Component {
    state = {
        search: ''
    }

    handleInput = e => {
        let { name, value } = e.target;
        // console.log(name, value);
        this.setState( { [name]: value });
        this.props.filterByTerm(value);
    }

    render()
    {
        return (
            <div>
                <form>
                    <label></label>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        name="search" 
                        value={this.state.search} 
                    />
                </form>
            </div>
        ) 
    }    
}


export default Searchbar;