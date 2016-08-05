import React from "react";

export default class TodoAddForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const taskText = {
            "text": document.getElementById('newTask').value,
            "done": false,
        }
        document.getElementById('newTask').value = '';
        this.props.addNewTask(taskText);
        return false;
    }

    render() {
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
