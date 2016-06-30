import React from "react";

export default class TodoAddForm extends React.Component {
    render() {
        return (
            <div class="row">
                <form class="form-horizontal">
    				<fieldset>
    					<div class="form-group">
    						<div class="col-lg-6 col-lg-offset-3">
                                <div class="input-group">
        							<input type="text" class="form-control" placeholder="Add new task..." />
        							<span class="input-group-btn">
        								<button class="btn btn-default" type="button">Add</button>
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
