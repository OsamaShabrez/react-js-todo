import React from "react";

export default class Footer extends React.Component {
    render() {
        const { footerText } = this.props;

        return (
            <footer>
                <div class="container">
                    <hr />
                    {footerText}
                </div>
            </footer>
        );
    }
}
