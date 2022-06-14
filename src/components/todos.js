import React from "react";

class Todos extends React.Component {
   render() {
      return this.props.todos.map((todo) => {
         return (
            <div
               className="todoItem"
               key={todo.id}
               onClick={() => {
                  this.setState({ singleTodo: todo.title });
               }}
            >
               {todo.title}
            </div>
         );
      });
   }
}

export default Todos;
