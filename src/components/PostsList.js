import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

class PostsList extends React.Component {

  createPost(post, index) {
    <Post key={index}
          link={post.link}
          title={post.title}
          content={post.content}
          date={post.date}
    />
  }

  render () {
    return (
      <div id="wrapper">
        { this.props.posts.map(this.createPost) }
      </div>
    )
  }
}

PostsList.propTypes = {
  posts:PropTypes.array.isRequired
}

export default PostsList;
