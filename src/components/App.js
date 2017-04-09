import React from 'react';

const apiKey = 'd25d034213e347749d132cc22e08adcc';
const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json" + "?api-key=" + apiKey;

class App extends React.Component {
  render() {
    return (
      <div>
        <a href="http://developer.nytimes.com/">{url}</a>
        <p>URL that's used for the request</p>
      </div>
    );
  }
}

export default App;
