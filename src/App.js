// Use a hook
import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


// All events are stored in here... global!

function App() {
    // state is immutable, 
    // you have to recreate and send again, so no push()!
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Watching a movie with Chan',
          day: 'Jan 21th 2022 at 8pm',
          reminder: 'false'
      },
      {
          id: 2,
          text: 'Sending package to Germany',
          day: 'Aug 18th 2022 at 10am',
          reminder: 'true'
      },
      {
          id: 3,
          text: 'Having lunch with Nathalie',
          day: 'Aug 17th 2021 at 1pm',
          reminder: 'false'
      },
   ]) 

   // Add task
   const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) +1
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])

   }

   // delete task
   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
   }

   // toggle reminder
   const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id === id ? {...task, reminder : task.reminder} : task))
   }

  return (
    <div className="container">
      <Header onAdd={() => 
      setShowAddTask (!showAddTask)}
      showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/> 
      ) : (
        'There are no tasks for now!'
      )}
    </div>
  );
}

export default App;




