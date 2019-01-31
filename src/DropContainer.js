import React from 'react';

export default class DropContainer extends React.Component {
    onDragOver(itemId, event) {
        event.preventDefault();
    }
    render() {
        let style = {
            width: "50%",
            // border: "1px solid #aaaaaa",
        }
        return ( 
            <div draggable="false"
                onDragOver={this.onDragOver.bind(this, this.props.id)}
                style={style} className="dropBox">
                {this.props.children}
            </div>
        )
    }
}