function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'make more coffee',
      isCompleted: false,
    }        
  ]);

  const addToDo = text => {
    const newTodos = [...todos, {text:text, isCompleted: false}];
    setTodos(newTodos);
  }

  const removeToDo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="list">
        <div className="card text-center border-0">
          <div className="card-header" style={{backgroundColor: "#4d2800"}}>
            <h1>ToDo List</h1>
          </div>
          <div className="card-body" style={{backgroundColor: "lightyellow"}}>
            {todos.map((todo, i) => <ToDo index={i} key={i} todo={todo} remove={removeToDo} /> )}
            <ToDoForm addToDo={addToDo}/>
          </div>
          <div className="card-footer text-white" style={{backgroundColor: "#4d2800"}}>
            Get After It || DEFCOR
          </div>
        </div>
      </div>    
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);