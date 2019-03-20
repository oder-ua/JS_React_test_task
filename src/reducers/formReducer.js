import { DATA_SAVE } from '../actions/formAcions.js';

const INITIAL_STATE = {
  dataload: {
    data: {
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
    }
  },
};

export default function (state = INITIAL_STATE, { type, dataload }) {
  switch (type) {

    case DATA_SAVE:
      return {
        ...state,
        dataload: dataload,
      };

    default:
      return state;
  }
}