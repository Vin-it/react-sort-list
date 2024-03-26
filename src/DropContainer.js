import React from 'react';

export default class DropContainer extends React.Component {
    onDragOver(itemId, event) {
        event.preventDefault();
    }
    render() {
        return (
            <div draggable="false"
                onDragOver={this.onDragOver.bind(this, this.props.id)}
                className="dropBox">
                {this.props.children}
            </div>
        )
    }
}