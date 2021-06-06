import { createStore } from "redux";
import TaskReducer from "./reducer";

const store = createStore(TaskReducer);

export default store;
