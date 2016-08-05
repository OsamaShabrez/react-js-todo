import React from "react";

import Item from "./TodoList/Item"

export default class TodoList extends React.Component {
    render() {
        const listItems = this.props.listItems;
        const updateListItemStatus = this.props.updateListItemStatus
        const removeListItem = this.props.removeListItem

        return (
            <div class="row">
                <dl class="dl-horizontal">
                {
                    listItems.map(function(item, index) {
                      return <Item key={index} index={index} item={item}  updateListItemStatus={updateListItemStatus} removeListItem={removeListItem} />
                    })
                }
                </dl>
            </div>
        );
    }
}
