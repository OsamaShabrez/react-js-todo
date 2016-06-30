import React from "react";

export default class Item extends React.Component {
    render() {
        return (
            <div class="row">
                <dt><input type="checkbox" /></dt>
                <dd>This is some text
                    <span class="pull-right littlemargin glyphicon glyphicon-remove" aria-hidden="true"></span>
                </dd>
            </div>
        );
    }
}
