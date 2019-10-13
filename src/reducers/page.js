import {
  START_ENGINE,
  START_MOVING,
  STOP_MOVING,
  STOP,
  PROPERTIES,
  DELETE,
  STOP_ENGINE
} from "../actions/pageActions";
export const initialState = {
  id: 2,
  arrCar: [
    { id: 0, engine: false, marka: "bmv", move: false },
    { id: 1, engine: false, marka: "mersedes", move: false },
    { id: 2, engine: false, marka: "audi", move: false }
  ]
};

export function allReducer(state = initialState, action) {
  switch (action.type) {
    case START_ENGINE: {
      state.arrCar.find(some => {
        return some.id === action.payload;
      }).engine = true;

      return { ...state };
    }
    case STOP_ENGINE: {
      state.arrCar.find(some => {
        return some.id === action.payload;
      }).engine = false;

      return { ...state };
    }
    case START_MOVING: {
      state.arrCar.find(some => {
        return some.id === action.payload;
      }).move = true;
      return { ...state };
    }
    case STOP_MOVING: {
      state.arrCar.find(some => {
        return some.id === action.payload;
      }).move = false;
      return { ...state };
    }

    case STOP: {
      state.arrCar.find(some => {
        return some.id === action.payload;
      }).move = false;
      return { ...state };
    }
    case PROPERTIES: {
      return {
        ...state,
        arrCar: [
          ...state.arrCar,
          {
            id: ++state.id,
            engine: false,
            marka: action.payload,
            move: false
          }
        ]
      };
    }
    case DELETE: {
      return {
        ...state,
        arrCar: state.arrCar.filter(car => car.id !== action.payload)
      };
    }
    default:
      return state;
  }
}
// return {  из-за удаления элемента массива id передаваемое в кнопке остается, а  element id сдвигается.
//   ...state,
//   arrCar: state.arrCar.map(element => {
//     if (element.id === action.payload) {
//       return {
//         id: action.payload,
//         engine: !state.arrCar[action.payload].engine,
//         marka: state.arrCar[action.payload].marka,
//         move: false
//       };
//     }
//     return element;
//   })
// };
