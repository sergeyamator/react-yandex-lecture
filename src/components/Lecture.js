import React from 'React';

export default props => (
  <article>
    <h2>{props.name}</h2>
    <strong>{props.teacher}</strong>
    <a href={props.src} target="_blank">Watch</a>
  </article>
);