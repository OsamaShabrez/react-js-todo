import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// find the location of app id in the html page and render the output inside
// Layout is a new file imported at line: 4 to break the application into small
// components
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
