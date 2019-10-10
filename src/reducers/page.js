import {
  SWITCH_ENGINE,
  SWITCH_MOVE,
  STOP,
  PROPERTIES,
  DELETE
} from "../actions/pageActions";
export const initialState = {
  id: 1,
  arrCar: [{ id: 1, engine: false, marka: "bmv", move: false }]
};

export function allReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ENGINE: {
      let X = (state.arrCar.find(e => {
        return e.id === action.payload;
      }).engine = !state.arrCar[action.payload].engine);
      alert(X);

      return { ...state, engine: !state.engine };
    }

    case SWITCH_MOVE: {
      return { ...state, move: !state.move };
    }
    case STOP: {
      return { ...state, move: false };
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
