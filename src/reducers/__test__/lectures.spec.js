import { expect } from 'chai';
import reducer from '../lectures';

it('Should add a new lecture', () => {
  const state = reducer(undefined, {});
  const stateLength = state.length;
  const payload = {
    id: 23441,
    name: 'Адаптивная вёрстка',
    teacherId: 10101,
    start: '2017-08-09T18:30:00',
    end: '2017-08-09T21:00:00',
    room: 12541,
    src: 'https://events.yandex.ru/lib/talks/4162',
    schoolsId: [343432]
  };


  expect(reducer(undefined, {
    type: 'ADD_NEW_LECTURE',
    payload
  })).to.have.lengthOf(stateLength + 1);
});