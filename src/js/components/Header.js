import React from "react";

export default class Header extends React.Component {
    render() {
        const { appTitle } = this.props;

        return (
            <header>
    			<div class="container">
    				<div class="row">
    					<div class="col-lg-12">
    						<h1 class="text-center">{appTitle}</h1>
    					</div>
    				</div>
    			</div>
    		</header>
        );
    }
}
