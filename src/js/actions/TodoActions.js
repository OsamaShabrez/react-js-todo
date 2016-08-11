// declares the available actions to the components
// Actions are always declared in caps as they are treated
// as constants. These calls are sent to the dispatcher
// who forwards them to the story (TodoStore)
import dispatcher from "../dispatcher";

// CREATE_TODO action
// creates a new todo with the supplied text
export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

// DELETE_TODO action
// removes the selected id todo from list
export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

// CHANGE_TODO_STATUS action
// updates the supplied id tast status
export function changeTodoStatus(id) {
    dispatcher.dispatch({
        type: "CHANGE_TODO_STATUS",
        id
    });
}
