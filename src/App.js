import { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css';


function App() {
  const [tasklist,setTasklist]=useState([]);
  const [task,setTask]=useState({});


  return (
    <div className="App">
      <div className="container">
      <Header/>
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      
      </div>
    </div>
  );
}

export default App;
