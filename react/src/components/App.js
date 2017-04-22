import React from 'react';

import PostsList from './PostsList';

import fetchData from '../fetch-data';
import parseData from '../parse-data';

const apiKey = 'd25d034213e347749d132cc22e08adcc';
const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json" + "?api-key=" + apiKey;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetchData(url,
      (response) => {
        const data = parseData(response.results);
        this.setState({ posts: data });
      },
      () => {
        console.error('Cannot fetch data from the NY Times!');
      }
    );
  }

  render() {
    return (
        <PostsList posts={this.state.posts} />
    );
  }
}

export default App;
