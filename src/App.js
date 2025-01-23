import logo from './logo.svg';
import './App.css';


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import React, {useState} from 'react';

function App() {
  const [todosList, setTodosList] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to get this job done"
    }
  ]);

  const onDelete = (todo) => {
    setTodosList(todosList.filter((e) => e !== todo));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todosList.length === 0) {
      sno = 1;
    } else {
      sno = todosList[todosList.length - 1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodosList([...todosList, myTodo]);
  }

  return (
    <>
      <Header title="MyTodosList"/>
      <AddTodo addTodo={addTodo}/>
      <Todos Todos={todosList} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
