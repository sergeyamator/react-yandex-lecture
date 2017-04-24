import {expect} from 'chai';

import reducer from '../lecturesForm';

describe('Lecture Form', () => {
  it('Should change state isOpened', () => {
    expect(reducer(undefined, {
      type: 'OPEN_FORM'
    })).to.have.property('isOpened')
      .that.equals(true);
  });


});