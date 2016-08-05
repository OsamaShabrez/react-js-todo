import React from "react";

export default class Item extends React.Component {
    // handles the change (when the list item status is changed) [checkbox is
    // checked or unchecked]
    // sends the index number of the list to updateListItemStatus in layout.js
    // to update state
    handleChange(event) {
        this.props.updateListItemStatus(event);
    }

    // handles the click on close button, sends the index no to the function in
    // layout.js removeListItem function
    handleClick(event) {
        this.props.removeListItem(event);
    }

    render() {
        const { text, done } = this.props.item;
        const index = this.props.index;

        return (
            <div class="row">

                <dt><input id={index} type="checkbox" onChange={this.handleChange.bind(this, index)} checked={done} /></dt>
                <dd>
                    <label for={index}>
                        {text}
                        <span class="pull-right littlemargin glyphicon glyphicon-remove" aria-hidden="true" onClick={this.handleClick.bind(this, index)} ></span>
                    </label>
                </dd>
            </div>
        );
    }
}
