import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ link, title, content, date }) {
  return (
    <div>
      <h1>{ this.props.title }</h1>
      <p>{ this.props.content }</p>
      <p>{ this.props.link }</p>
      <p>{ this.props.date }</p>
    </div>
  )
}

Post.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
