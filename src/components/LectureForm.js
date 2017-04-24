import React from 'react';

const data = {};

export default props => (
  <form className="form">
    <h2 className="form__title">Введите данные лекции</h2>

    <input
      className="form__input" type="text"
      placeholder="Введите имя лекции"
      onInput={e => {
        data.name = e.target.value.trim();
      }}
    />
    <input
      className="form__input"
      type="text"
      placeholder="Введите дату и время начала лекции"
      onInput={e => {
        data.start = e.target.value.trim();
      }}
    />
    <input
      className="form__input"
      type="text"
      placeholder="Введите дату и время окончания лекции"
      onInput={e => {
        data.end = e.target.value.trim();
      }}
    />
    <input
      className="form__input"
      type="text"
      placeholder="Введите преподавателя лекции"
      onInput={e => {
        data.teacherName = e.target.value.trim();
      }}
    />
    <input
      className="form__input"
      type="text"
      placeholder="Введите школу лекции"
    />
    <input
      className="form__input"
      type="text"
      placeholder="Введите место проведения лекции"
    />
    <button onClick={() => {
      props.onSave(data)
    }} type="submit">Сохранить</button>
    <button type="reset">Отмена</button>
  </form>
);