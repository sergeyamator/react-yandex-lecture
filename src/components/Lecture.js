import React from 'React';

export default props => (
  <article>
    <div>{props.data}</div>
    <h2>{props.name}</h2>
    <strong>{props.teacher}</strong>
    <div>{props.room}</div>
    <a href={props.src} target="_blank">Watch</a>
  </article>
);