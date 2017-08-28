import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome');

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state={
      value : '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  }
  render() {
    return (
      <div className="searchbox">
        <form onSubmit={this.handleSubmit}>
          <div className='input-group'>
          <span><FontAwesome name="search"/></span>
          <input type='text' value={this.state.value} onChange={e=>this.setState({value : e.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
