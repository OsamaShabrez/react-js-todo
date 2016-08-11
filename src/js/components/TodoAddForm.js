import React from "react";

export default class TodoAddForm extends React.Component {
    // react way of processing submitted forms preventDefault() prevents
    // the page reload get the text from form and send it to the MyTodoApp
    // where the appropriate action is called
    handleSubmit(event) {
        event.preventDefault();
        const taskText = document.getElementById('newTask').value;
        // the refrenced prop is the attrib of the parent callee
        // in this case 'addNewTask'
        if (taskText.length != 0) {
            this.props.addNewTask(taskText);
        }
        // reset the input field..
        document.getElementById('newTask').value = '';
    }

    render() {
        // basic html for form to add new tasks
        return (
            <div class="row">
                <form class="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
    				<fieldset>
    					<div class="form-group">
    						<div class="col-lg-6 col-lg-offset-3">
                                <div class="input-group">
        							<input id="newTask" type="text" class="form-control" placeholder="Add new task..." pattern=".{1,}" required />
        							<span class="input-group-btn">
        								<button class="btn btn-default" type="submit" value="submit">Add</button>
        							</span>
                                </div>
    						</div>
    					</div>
    				</fieldset>
    			</form>
            </div>
        );
    }
}
