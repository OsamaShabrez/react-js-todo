import React from "react";

export default class Item extends React.Component {
    // handles the change (when the list item status is changed) [checkbox is
    // checked or unchecked]
    // sends the index number (id) of the list to updateListItemStatus in
    // to update state layout.js
    handleChange(event) {
        this.props.updateListItemStatus(event);
    }

    // handles the click on close button, sends the index no (id) to the
    // function in layout.js removeListItem function
    handleClick(event) {
        this.props.removeListItem(event);
    }

    render() {
        const text = this.props.item.text;
        const done = this.props.item.done;
        const index = this.props.index;

        return (
            <div class="row">

                <dt><input id={index} type="checkbox" onChange={this.handleChange.bind(this, index)} checked={done} /></dt>
                <dd>
                    <label for={index}>
                        {text}
                        <button class="pull-right littlemargin glyphicon glyphicon-remove" aria-hidden="true" onClick={this.handleClick.bind(this, index)} ></button>
                    </label>
                </dd>
            </div>
        );
    }
}
