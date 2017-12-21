import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import Button from '../Button';

//https://www.booknomads.com/api/v0/isbn/9789000035526

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      buttonValue: 'title',
    };
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="header_search_wrapper">
        <div className="header_search">
          <input
            type="text"
            name=""
            defaultValue=""
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
            ref={(input) => { this.input = input; }}
          />
          <Link to={`/search/${this.state.buttonValue}=${this.state.searchValue}`}><Button
            type="submit"
            text="search"
            onClick={this.handleSearchClick}
          /></Link>
        </div>
      </div>
    );
  }
}

export default Search;