import React from "react";

export default class Item extends React.Component {
    handleChange(event) {
        console.log('number?: ' + event);
        this.props.updateListItemStatus(event);
    }

    render() {
        const { text, done } = this.props.item;
        const index = this.props.index;

        return (
            <div class="row">
                <dt><input type="checkbox" onchange={this.handleChange.bind(this, index)} defaultChecked={done} /></dt>
                <dd>
                    {text}
                    <span class="pull-right littlemargin glyphicon glyphicon-remove" aria-hidden="true" onClick={this.handleChange.bind(this, index)} ></span>
                </dd>
            </div>
        );
    }
}
