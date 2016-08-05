import React from "react";

export default class Item extends React.Component {
    handleChange(event) {
        this.props.updateListItemStatus(event);
    }

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
