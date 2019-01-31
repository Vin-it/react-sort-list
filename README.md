# react-sort-list

React Drag and Drop sortable list for array of objects.

#### How to Install

```
npm install react-sort-list
```

#### Example & How to use

Here is an example, and explaination is at the bottom.

```
import React from 'react';
import { SortableItem, swapArrayPositions } from 'react-sort-list';

let todos = [
    {id: 1, title: "Task 1"},
    {id: 2, title: "Task 2"},
    {id: 3, title: "Task 3"}
]

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }
        this.swap = this.swap.bind(this);
    }

    // This could be named anything, but can only be passed down in "swap" prop on SortableItem
    swap(dragIndex, dropIndex) {
        let swappedTodo = swapArrayPositions(this.state.todos, dragIndex, dropIndex);
        this.setState({
            todos: swappedTodo
        })
    }

    render() {
        return (
            <ul>
                {todos.map(function (todo, index) {
                    return (
                        // Don't forget to have items, id, and swap properties.
                        <SortableItem items={todos} id={todo.id} key={todo.id} swap={this.swap} >
                            <li> {todo.title} </li>
                        </SortableItem>
                    )
                }.bind(this))}
            </ul>
        )
    }
}
```

There are few things to keep in mind as you use this module, and they are demonstrated in the above example:

- For now, this component will only work if you have an array of objects with an id for the object. (Might add more features in upcoming days).
- The items that you want to be draggable should be wrapped in `<SortableItem></SortableItem>`. (Remember, don't wrap the entire list, but each individual element in the list)
- The `<SortableItem>` element needs the array list in the "items" prop, and id of the each individual item in the "id" prop, and a method (can be named anything, see the example above) as the "swap" prop. This prop will return two indexes that will swap that array items.
  In the above example we have used

```
<SortableItem items={todos} id={todo.id} key={todo.id} swap={this.swap}>
    <li> {todo.title} </li>
</SortableItem>
```

but you can use a React component with it's own functionality. For example,

```
<SortableItem items={todos} id={todo.id} key={todo.id} swap={this.swap}>
    <TodoItem
    createTodo={this.props.createTodo}
    deleteTodo={this.props.deleteTodo} />
</SortableItem>
```
