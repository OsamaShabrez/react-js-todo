import React from "react";

// importing child components into Layout
import Footer from "../layout/Footer";
import TodoAddForm from "./TodoAddForm";
import Header from "../layout/Header";
import * as TodoActions from "../actions/TodoActions"
import TodoList from "./TodoList";
import TodoStore from "../stores/TodoStore";

// we are making a small ToDo list with FLUX where new tasks can be added,
// previous tasks can be marked done or completely removed
export default class MyTodoApp extends React.Component {

    // setting up the initial state of our application, page title, footer text
    // the current todo comes from the todolist store (TodoStore)
    constructor() {
        super();
        this.state = {
            appTitle: "My to-do list app",
            footerText: "My todo list footer",
            listItems: TodoStore.getAll(),
        }
    }

    // Invoked once, both on the client and server, immediately before the
    // initial rendering occurs. We use this function to set binding on
    // change listener when store is updated and want to reflect changes in
    // components
    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({
                listItems: TodoStore.getAll()
            });
        });
    }

    // Invoked immediately before a component is unmounted (loses focust) from
    // DOM. Useless here but when we have multiple routes and components lose
    // focus, we use this method to stop listning for new changes in store
    //
    // WARNING: If we don't, every time a component is loaded back to the DOM
    // a new listner is created while old ones are not cleaned leaking memory
    componentsWillUnmount() {
        TodoStore.removelistener("change", this.getTodos);
    }

    // we get the state from store one last time before removing the listener
    getTodos() {
        this.setState({
            listItems: TodoStore.getAll(),
        })
    }

    // sends a request to the action to add new task
    addNewTask(newTask) {
        TodoActions.createTodo(newTask);
    }

    // sends a request to the action to edit a todo item status
    updateListItemStatus(id) {
        TodoActions.changeTodoStatus(id);
    }

    // sends a request to the action to edit a todo item status
    removeListItem(id) {
        TodoActions.deleteTodo(id);
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
