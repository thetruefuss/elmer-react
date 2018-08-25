import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
    this.handle_search = this.handle_search.bind(this);
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_search = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/results',
      search: `?search_query=${this.state.searchText}`,
      state: { query: this.state.searchText }
  })
  };

  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handle_search} className="form-inline">
        <div className="form-group">
          <label htmlFor="search" className="sr-only">Search</label>
          <input type="text" className="form-control form-control-sm" id="search" name="searchText" placeholder="Search Elmer" value={this.state.searchText} onChange={this.handle_change} style={{width:'360px', borderRadius: '3rem', textIndent:'10px', margin:'0px 15px'}} />
        </div>
      </form>
      </React.Fragment>
    );
  }
}

export default SearchInput;
