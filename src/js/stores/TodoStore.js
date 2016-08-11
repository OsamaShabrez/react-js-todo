import {
	EventEmitter
} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.listItems = [{
			text: "This is a task",
			done: false,
		}, {
			text: "This is another task",
			done: true,
		}, {
			text: "This is yet another task",
			done: false,
		}, {
			text: "and I don't like this task for no reason",
			done: true,
		}, ];
	}

	getAll() {
		return this.listItems;
	}

    // add new task, takes an object with text, and current status (incomplete)
    // and concats to the state.listItems. In react objects are immutable so we
    // copy previousState, makes changes  and create a new state with return
	createTodo(text) {
		this.listItems.push({
			text,
			done: false,
		});
		this.emit("change");
	}

    // using the index number filters the listItems in store and remove the
    //  matching index number. Uses the filter function which keeps track of
    //  current and new state automatically
    deleteTodo(id) {
        this.listItems = this.listItems.filter(
            function (c, i) {
                if (i != id)
                    return c;
            }
        );
        this.emit("change");
    }

    // takes the index number of task in store and updates the status
    // to either true (complete) or false (incomplete) depending on current status
    changeTodoStatus(id) {
        this.listItems = this.listItems.filter(
            function(c, i) {
                if (i == id) {
                    // look closely ;)
                    c.done = !c.done;
                }
                return c;
            }
        );
        this.emit("change");
    }

    // dispatcher handler that receives the calls from the dispatcher and calls
    // appropriate functions from the Store itself
	handleActions(action) {
		switch (action.type) {
			case "CREATE_TODO":
				{
					this.createTodo(action.text);
					break;
				}
			case "DELETE_TODO":
				{
					this.deleteTodo(action.id);
					break;
				}
            case "CHANGE_TODO_STATUS":
                {
                    this.changeTodoStatus(action.id);
                    break;
                }
		}
	}

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

// for testing purpose only
window.todoStore = todoStore;
window.dispatcher = dispatcher;

export default todoStore;
