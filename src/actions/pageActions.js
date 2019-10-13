export const START_ENGINE = "START_ENGINE";
export const STOP_ENGINE = "STOP_ENGINE";

export const STOP = "STOP";
export const PROPERTIES = "PROPERTIES";
export const DELETE = "DELETE";
export const START_MOVING = "START_MOVING";
export const STOP_MOVING = "STOP_MOVING";

export function startEngine(id) {
  return {
    type: START_ENGINE,
    payload: id
  };
}
export function stopEngine(id) {
  return {
    type: STOP_ENGINE,
    payload: id
  };
}
export function startMoving(id) {
  return { type: START_MOVING, payload: id };
}
export function stopMoving(id) {
  return { type: STOP_MOVING, payload: id };
}
export function stopAll(id) {
  return { type: STOP, payload: id };
}
export function pushArr(e) {
  return { type: PROPERTIES, payload: e };
}
export function deleteArr(id) {
  return { type: DELETE, payload: id };
}
