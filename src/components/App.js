import React from 'react';

import PostsList from './PostsList';

const apiKey = 'd25d034213e347749d132cc22e08adcc';
const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json" + "?api-key=" + apiKey;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} />
        <h1>Hello</h1>
      </div>
    ); // 'Hello' is just for test
  }
}

export default App;
