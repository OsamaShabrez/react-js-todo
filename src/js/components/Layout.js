import React from "react";

import Footer from "./Footer";
import TodoAddForm from "./TodoAddForm";
import Header from "./Header";
import TodoList from "./TodoList";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            appTitle: "My to-do list app",
            footerText: "My todo list footer",
        }
    }

    render() {
        return (
            <div>
                <Header appTitle={this.state.appTitle} />
                <div class="container main">
                    <TodoAddForm />
                    <TodoList />
                </div>
                <Footer footerText={this.state.footerText} />
            </div>
        );
    }
}
