import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

class PostsList extends React.Component {

  createPost(posts) {
    const result = [];
    for (let i = 0; i < posts.length; i++) {
      result.push(<Post key={i}
            link={posts[i].link}
            title={posts[i].title}
            content={posts[i].content}
            date={posts[i].date}
      />)
    }
    return result;
  }

  render () {
    return (
      <div id="wrapper">
        <div id="header">
          <h1 id="main-header">News widget with React and NY Times API</h1>
          <p>BY ALEX ANDREYEV</p>
        </div>
        { this.createPost(this.props.posts) }
      </div>
    )
  }
}

PostsList.propTypes = {
  posts:PropTypes.array.isRequired
}

export default PostsList;
