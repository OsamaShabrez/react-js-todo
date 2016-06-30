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
            listItems: [
                {
                    "text": "This is a task",
                    "done": false,
                },
                {
                    "text": "This is another task",
                    "done": true,
                },
            ],
        }
    }

    addNewTask(newTask) {
        this.setState(function(previousState, currentProps) {
            if (newTask.text.length != 0) {
                return {listItems: previousState.listItems.concat(newTask)}
            }
        });
    }

    updateListItemStatus(number) {
        console.log(this.state.listItems);
        var newListItems = this.state.listItems.slice();
        console.log(newListItems[number]);
//        newListItems[number].done = true;
        this.setState({listItems: newListItems});
        console.log(this.state.listItems);
    }

    render() {
        return (
            <div>
                <Header appTitle={this.state.appTitle} />
                <div class="container main">
                    <TodoAddForm addNewTask={this.addNewTask.bind(this)} />
                    <TodoList listItems={this.state.listItems} updateListItemStatus={this.updateListItemStatus.bind(this)} />
                </div>
                <Footer footerText={this.state.footerText} />
            </div>
        );
    }
}
