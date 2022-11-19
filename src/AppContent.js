import React, { Component } from 'react';

export default class AppContent extends Component {

  state = {posts: []};

  anotherFunction = () => {
    console.log("another function")
  }

  leftParagrap = () => {
    console.log("leftparagrap")
  }

  fetchList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(json => {
          this.setState({posts: json});
        })
  }

  clickedItem = (x) => {
    console.log("clicked", x);
  }

  render(){
    return (
      <div>
        This is the content
        
        <br />
        <hr />
        <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagrap}>This is some text</p>
        
        <button onClick={this.fetchList} className='btn btn-primary'>Fetch Date</button>

        <hr />

        <p>Post is{this.state.posts.length} items long</p>

        <ul>
          {this.state.posts.map((c) => (
            <li key={c.id}>
              <a href="#!" onClick={() => this.clickedItem(c.id)}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}