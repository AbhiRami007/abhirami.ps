import { createStore } from "redux";
import reducer from "./List/list-reducer";

export const store = createStore(reducer);
