import React from "react";

// importing child components into Layout
import Footer from "./Footer";
import TodoAddForm from "./TodoAddForm";
import Header from "./Header";
import TodoList from "./TodoList";

// we are making a small ToDo list where new tasks can be added, previous tasks
// can be marked done or completely removed
export default class Layout extends React.Component {

    // setting up the initial state of our application, page title, footer text
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

    // add new task, takes an object with text, and current status (incomplete)
    // and concats to the state.listItems. In react objects are immutable so we
    // copy previousState, makes changes  and create a new state with return
    addNewTask(newTask) {
        this.setState({
            listItems: this.state.listItems.concat(newTask)
        });
    }

    // takes the index number of task in state.listItems and updates the status
    // to either true (complete) or false (incomplete) depending on current status
    updateListItemStatus(number) {
        this.setState({
            listItems: this.state.listItems.filter(
                function(c, i) {
                    if (i == number) {
                        c.done = c.done ? false : true;
                    }
                    return c;
                })
        });
    }

    // using the index number filters the listItems and remove the matching index
    // number. Uses the filter function which keeps track of current and new state
    // automatically
    removeListItem(number) {
        this.setState({
            // listItems: this.state.listItems.filter((_, i) => i !== number)
            listItems: this.state.listItems.filter(
                function (c, i) {
                    if (i != number)
                        return c;
                })
        });
    }

    render() {
        // render can only emit on html element so we nest our output in one div component
        // header & footer contains basic html; no *serious* code
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
