export default function reducer(
	state = {
		appTitle: "My to-do list app",
		footerText: "My todo list footer",
		listItems: [{
			"text": "This is a task",
			"done": false,
		}, {
			"text": "This is another task",
			"done": true,
		}, ]
	}, action) {
	switch (action.type) {
		case "CREATE_TODO":
			{
				break;
			}
		case "CREATE_TODO_REJECTED":
			{
				break;
			}
		case "CREATE_TODO_FULLFILLED":
			{
				break;
			}
		case "DELETE_TODO":
			{
				break;
			}
		case "DELETE_TODO_REJECTED":
			{
				break;
			}
		case "DELETE_TODO_FULLFILLED":
			{
				break;
			}
		case "CHANGE_TODO_STATUS":
			{
				break;
			}
		case "CHANGE_TODO_STATUS_REJECTED":
			{
				break;
			}
		case "CHANGE_TODO_STATUS_FULLFILLED":
			{
				break;
			}
	}
    return state;
}
