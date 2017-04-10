import React from 'react';
import PropTypes from 'prop-types';

function Post({ link, title, content, date }) {
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ content }</p>
      <p>{ link }</p>
      <p>{ date }</p>
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
