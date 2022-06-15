import React from "react";
import Loading from "./components/loading";
import Todos from "./components/todos";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: null,
         singleTodo: null,
         loading: true,
         loadingMessage: "Page is loading..",
      };
   }
   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos/")
         .then((res) => res.json())
         .then((data) => {
            this.setState({ todos: data, loading: false });
         });
   }
   render() {
      const updateToSingle = (e) => {
         fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
         .then((res) => res.json())
         .then(data => this.setState({singleTodo: data}))
      }
      if (this.state.loading) {
         return <Loading loadingMessage={this.state.loadingMessage} />;
      } else {
         if (this.state.singleTodo) return <div className="todoItem" key={this.state.singleTodo.id}>
            {this.state.singleTodo.title}
         </div>
         else return <Todos todos={this.state.todos} updateToSingle={updateToSingle}/>;
      }
   }
}

export default App;
