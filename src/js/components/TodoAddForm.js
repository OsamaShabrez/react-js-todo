import React from "react";

export default class TodoAddForm extends React.Component {
    handleChange(event) {
        const taskText = {
            "text": document.getElementById('newTask').value,
            "done": false,
        }
        document.getElementById('newTask').value = '';
        this.props.addNewTask(taskText);

    }

    render() {
        return (
            <div class="row">
                <form class="form-horizontal">
    				<fieldset>
    					<div class="form-group">
    						<div class="col-lg-6 col-lg-offset-3">
                                <div class="input-group">
        							<input id="newTask" type="text" class="form-control" placeholder="Add new task..." />
        							<span class="input-group-btn">
        								<button class="btn btn-default" type="button" onClick={this.handleChange.bind(this)}>Add</button>
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
