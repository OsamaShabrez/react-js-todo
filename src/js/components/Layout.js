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
        this.setState(function(previousState, currentProps) {
            var newListItems = previousState.listItems.slice();
            newListItems[number].done  = newListItems[number].done ? false : true;
            return {listItems: newListItems}
        });
    }

    removeListItem(number) {
        this.setState({
            listItems: this.state.listItems.filter((_, i) => i !== number)
        });
    }

    render() {
        return (
            <div>
                <Header appTitle={this.state.appTitle} />
                <div class="container main">
                    <TodoAddForm addNewTask={this.addNewTask.bind(this)} />
                    <TodoList listItems={this.state.listItems} updateListItemStatus={this.updateListItemStatus.bind(this)} removeListItem={this.removeListItem.bind(this)} />
                </div>
                <Footer footerText={this.state.footerText} />
            </div>
        );
    }
}
