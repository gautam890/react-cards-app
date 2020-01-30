import { createStore } from "redux";

import rootReducer from "./RootReducer";

let Store = createStore(rootReducer);

export default Store;