import React from 'react';
import PropTypes from 'prop-types';

function Post({ link, title, content, date }) {
  return (
    <div id="post">
      <h1 id="post-header">{ title }</h1>
      <p id="content">{ content }</p>
      <p id="link"><a href={ link } target="_blank">Read more</a></p>
      <p id="date">{ date }</p>
    </div>
  )
}

Post.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Post;
