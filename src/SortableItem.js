import React from "react";
import findIndex from "lodash/findIndex";
import DropContainer from "./DropContainer.js";

let gState = {};

const reducer = (state, action) => {
  console.log(state, action.type, action.payload);
  switch (action.type) {
    case "ON_DRAG_START":
      return Object.assign(state, action.payload);
    case "ON_DROP":
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};

export class SortableItem extends React.Component {
  constructor(props) {
    super(props);
  }
  swapArrayPositions(dragIndex, dropIndex) {
    this.props.swap(dragIndex, dropIndex);
  }
  dispatch(action) {
    gState = reducer(gState, action);
  }
  onDrop(itemId, event) {
    let dropItemIndex = findIndex(this.props.items, { id: itemId });
    this.dispatch({ type: "ON_DROP", payload: { dropItemIndex: dropItemIndex } });
    this.swapArrayPositions(gState.dragItemIndex, gState.dropItemIndex)
  }
  onDragStart(itemId, event) {
    let dragItemIndex = findIndex(this.props.items, { id: itemId });
    this.dispatch({ type: "ON_DRAG_START", payload: { dragItemIndex: dragItemIndex } });
  }
  renderTasks() {
    if (this.props.id) {
      return (
        <DropContainer
          key={this.props.id}
          id={this.props.id}

        >
          <div
            id={this.props.id}
            className="draggable"
            draggable="true"
            onDragStart={this.onDragStart.bind(this, this.props.id)}
            onDrop={this.onDrop.bind(this, this.props.id)}
            id={this.props.id}
          >
            {this.props.children}
          </div>
        </DropContainer>
      );
    }
  }
  render() {
    return <div>{this.renderTasks()}</div>;
  }
}

export function swapArrayPositions(items, dragIndex, dropIndex) {
  var temp = items[dropIndex];
  items[dropIndex] = items[dragIndex];
  items[dragIndex] = temp;
  return items;
}
