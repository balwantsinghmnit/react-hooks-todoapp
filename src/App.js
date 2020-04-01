import React,{useState} from "react";
import "./App.css";

function Todo({todo,index,completeTodo,deleteTodo})
{
  return(
    <div className="todo" style={{textDecoration:todo.isComplete?'line-through':''}}>
      {todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
        <button onClick={()=>deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

function TodoForm({addTodo})
{
  const [value,setValue] = useState('');
  const handleSubmit=e=>{
    e.preventDefault();
    if(!value)return;
    addTodo(value);
    setValue('');
  }
  return(
  <form onSubmit={handleSubmit}>
    <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)} />
  </form>
  );
}

function App()
{
  const [todos,setTodos] = useState([
    {
      text:"Sociology Assignment",
      isComplete:false
    },
    {
      text:"wsn 5th assignment",
      isComplete:true 
    },
    {
      text:"stc assignment",
      isComplete:false
    }]
  );

  const addTodo =text=>{
      const newtodos = [...todos,{text,isComplete:false}];
      setTodos(newtodos);
  }

  const completeTodo=index=>{
    const newtodos = [...todos];
    newtodos[index].isComplete=true;
    setTodos(newtodos);
  }
  const deleteTodo=index=>{
    const newtodos = [...todos];
    newtodos.splice(index,1);
    setTodos(newtodos);
  }

  return(
      <div className="app">
          <div className="todo-list">
              {todos.map((todo,index)=>(
                <Todo  key={index}  index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
              ))}
              <TodoForm addTodo={addTodo}/>
          </div>
          
      </div>
      );
}

export default App;