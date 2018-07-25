import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    githubRepoName: []
  }

  componentDidMount() {
    const url=`https://api.github.com/users/213withani/repos`;
    const names = [];

    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      // console.log(json.html_url);
      
      const name = json.map((repo)=>{
        names.push(repo.name); // add repo.name string into names array 
      });
      
      this.setState({ githubRepoName:names });
    });
  }

  render() {
    return (
      <div>
        <h1>Web app</h1>
        <h2>List of repos</h2>
        <ul style={styles.list}>{console.log(this.state.githubRepoName)}
          {this.state.githubRepoName.map((repo)=><li>{repo}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;

const styles = {
  list: {
    padding: '15px',
    listStyleType: 'none',
  }
}
