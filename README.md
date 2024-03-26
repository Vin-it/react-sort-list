# react-sort-list

React Drag and Drop sortable list for array of objects.

#### How to Install

```
npm install react-sort-list
```

#### Example & How to use

```
import { SortableItem, swapArrayPositions } from 'react-sort-list';
import { useState } from 'react';

let todos = [
  {id: 1, title: "Task 1"},
  {id: 2, title: "Task 2"},
  {id: 3, title: "Task 3"}
]



function App() {
  const [todoState, setTodoState] = useState(todos);

  function swap(dragIndex, dropIndex) {
    let swappedTodos = swapArrayPositions(todoState, dragIndex, dropIndex);

    setTodoState([...swappedTodos]);
  }

  return (
  <ul>
      {todoState.map(function (todo, index) {
          return (
            <SortableItem items={todoState} id={todo.id} key={todo.id} swap={swap} >
              <li> {todo.title} </li>
            </SortableItem>
          )
      })}
    </ul>
  );
}

export default App;

```

There are few things to keep in mind as you use this module, and they are demonstrated in the above example:

- This component will only work if you have an array of objects with an id for the object.
- The items that you want to be draggable should be wrapped in `<SortableItem></SortableItem>`. (Remember, don't wrap the entire list, but each individual element in the list)
- The `<SortableItem>` element needs the array list in the "items" prop, and id of the each individual item in the "id" prop, and a method (can be named anything, see the example above) as the "swap" prop. This prop will return two indexes that will swap that array items.
  In the above example we have used`

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
