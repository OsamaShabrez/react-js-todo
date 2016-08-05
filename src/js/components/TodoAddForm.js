import React from "react";

export default class TodoAddForm extends React.Component {
    // react way of processing submitted forms
    // preventDefault() prevents the page reload
    // create a new task object and send it to the
    // layout where the (model) is to insert into state
    handleSubmit(event) {
        event.preventDefault();
        const taskText = {
            "text": document.getElementById('newTask').value,
            "done": false,
        }
        // reset the input field..
        document.getElementById('newTask').value = '';
        this.props.addNewTask(taskText);
    }

    render() {
        // basic html for form to add new tasks
        return (
            <div class="row">
                <form class="form-horizontal"  onSubmit={this.handleSubmit.bind(this)}>
    				<fieldset>
    					<div class="form-group">
    						<div class="col-lg-6 col-lg-offset-3">
                                <div class="input-group">
        							<input id="newTask" type="text" class="form-control" placeholder="Add new task..." />
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
