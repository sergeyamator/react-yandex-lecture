import React from 'React';

export default props => (
  <article className="lecture">
    <div className="lecture__data">{props.data}</div>
    <h2 className="lecture__name">{props.name}</h2>
    <strong className="lecture__teacher">{props.teacher}</strong>
    <div className="lecture__room">{props.room}</div>
    <div>{props.schools}</div>
    <a className="lecture__link" href={props.src} target="_blank">Watch</a>
    <a className="lecture__link" onClick={() => props.onEdit(props.id)}>Edit</a>
  </article>
);