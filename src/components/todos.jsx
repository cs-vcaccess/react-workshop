import React from "react";

class Todos extends React.Component {
   render() {
      const handleSingleTodo = (e) => {
         this.props.updateToSingle(e)
      }
      return this.props.todos.map((todo) => {
         return (
            <div className="todoItem"
               key={todo.id}
               id={todo.id}
               onClick={handleSingleTodo}>
               {todo.title}
            </div>
         );
      });
   }
}

export default Todos;
