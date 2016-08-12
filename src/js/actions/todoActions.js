export function createTodo(text) {
    return {
        type: "CREATE_TODO",
        payload: {
            text
        }
    }
}

export function deleteTodo(id) {
    return {
        type: "DELETE_TODO",
        payload: {
            id
        }
    }
}

export function changeTodoStatus(id) {
    return {
        type: "CHANGE_TODO_STATUS",
        payload: {
            id
        }
    }
}
