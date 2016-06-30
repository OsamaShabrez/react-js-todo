import React from "react";

import Item from "./TodoList/Item"

export default class TodoList extends React.Component {
    render() {
        return (
            <div class="row">
                <dl class="dl-horizontal">
                    <Item/>
                </dl>
            </div>
        );
    }
}
