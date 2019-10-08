export const SWITCH_ENGINE = "SWITCH_ENGINE";
export const SWITCH_MOVE = "SWITCH_MOVE";
export const STOP = "STOP";
export const PROPERTIES = "PROPERTIES";
export const DELETE = "DELETE";
export function switchEngine() {
  return {
    type: SWITCH_ENGINE
  };
}
export function switchMove() {
  return { type: SWITCH_MOVE };
}
export function stopAll() {
  return { type: STOP };
}
export function pushArr(e) {
  return { type: PROPERTIES, payload: e };
}
export function deleteArr(id) {
  return { type: DELETE, payload: id };
}
