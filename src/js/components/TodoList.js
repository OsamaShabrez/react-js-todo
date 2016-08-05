import React from "react";

// for better compartmentalization the items code is inside the TodoList folder
import Item from "./TodoList/Item"

export default class TodoList extends React.Component {
    render() {
        // receive the props sent by the Layout.js. More information:
        // http://stackoverflow.com/questions/23481061/reactjs-state-vs-prop
        // https://www.youtube.com/watch?v=qh3dYM6Keuw
        const listItems = this.props.listItems;
        const updateListItemStatus = this.props.updateListItemStatus
        const removeListItem = this.props.removeListItem

        // map function works like a loop and maps the body of the fuction to each item
        // in the map. Always pass index as a key the children or you will get a warning
        // key=index helps react keep track of the changes and selective renders
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
