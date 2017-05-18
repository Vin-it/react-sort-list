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
  - The items that you want to be draggable, wrap it around ```<SortableItem></SortableItem>```. (Remember, don't wrap the entire list, but each individual element in the list)
  - The ```<SortableItem>``` element needs the array list in the "items" prop, and id of the each individual item in the "id" prop, and a method as the "swap" prop. This prop will return two indexes that will swap that array items.
In the above example we have used 
```
 <li> {todo.title} </li>
```
but you can use a React component with it's own functionality. For example, 
```
 <TodoItem 
 createTodo={this.props.createTodo}
 deleteTodo={this.props.deleteTodo} />
```

