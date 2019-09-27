import * as React from 'react';
import { Button } from "antd";
export default class NewButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Button, Object.assign({}, this.props), this.props.children));
    }
}
//# sourceMappingURL=index.js.map