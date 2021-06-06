import {
  ADD_TASK,
  DELETE_TASK,
  DID_TASK,
  NOT_DID_TASK,
  MOVE_DELETED_TASK,
} from "./types";

const initialState = {
  tasks: [
    { task: "HTML", done: false, deleted: false, id: "1" },
    { task: "CSS", done: false, deleted: false, id: "2" },
    { task: "RESPONSIVE", done: false, deleted: false, id: "3" },
  ],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload,
            done: false,
            deleted: false,
            id: Math.floor(Math.random() * 9000).toString(),
          },
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case DID_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            done: true,
          };
        }),
      };

    case NOT_DID_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            done: false,
          };
        }),
      };

    case MOVE_DELETED_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            deleted: true,
          };
        }),
      };

    default:
      return state;
  }
};

export default TaskReducer;
