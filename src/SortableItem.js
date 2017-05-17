import React from 'react';
import _ from 'lodash';
import DropContainer from './DropContainer.js';

let dragIndex = null;

export class SortableItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropItemIndex: '',
            dragItemIndex: ''
        }
    }
    swapArrayPositions(dragIndex, dropIndex) {
        this.props.swap(dragIndex, dropIndex);
    }
    onDragOver(itemId, event) {
        let dropItemIndex = _.findIndex(this.props.items, { id: itemId });
        this.setState({
            dropItemIndex: dropItemIndex
        })
    }
    onDrop(itemId, event) {
        let dropItemIndex = this.state.dropItemIndex;
        let dragItemIndex = dragIndex;
        this.swapArrayPositions(dragItemIndex, dropItemIndex)
    }
    onDragStart(itemId, event) {
        let dragItemIndex = _.findIndex(this.props.items, { id: itemId });
        this.state.dragItemIndex = dragItemIndex;
        dragIndex = dragItemIndex;
        event.dataTransfer.setData("text", event.target.id);
    }
    renderTasks() {
        if (this.props.id) {
            return (
                <DropContainer key={this.props.id} id={this.props.id} onDragOver={this.onDragOver.bind(this)}>
                    <div
                        id={this.props.id}
                        className="draggable"
                        draggable="true"
                        onDragStart={this.onDragStart.bind(this, this.props.id)}
                        onDrop={this.onDrop.bind(this, this.props.id)}
                        id={this.props.id}>
                        {this.props.children}
                    </div>
                </DropContainer>
            )
        } 
    }
    render() {
        return (
            <div>
                {this.renderTasks()}
            </div>
        )
    }
}

export function swapArrayPositions(items, dragIndex, dropIndex) {
    var temp = items[dropIndex];
    items[dropIndex] = items[dragIndex];
    items[dragIndex] = temp;
    return items;
}