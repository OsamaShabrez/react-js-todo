import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import MyTodoApp from "./components/MyTodoApp";
import store from "./store";

// find the location of app id in the html page and render the output inside
// Layout is a new file imported at line: 4 to break the application into small
// components
const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
        <MyTodoApp/>
    </Provider>, app);
