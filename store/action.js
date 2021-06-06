import {
  ADD_TASK,
  DELETE_TASK,
  DID_TASK,
  NOT_DID_TASK,
  MOVE_DELETED_TASK,
} from "./types";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const didTask = (id) => ({
  type: DID_TASK,
  payload: id,
});

export const notDidTask = (id) => ({
  type: NOT_DID_TASK,
  payload: id,
});

export const moveDeletedTask = (id) => ({
  type: MOVE_DELETED_TASK,
  payload: id,
});
