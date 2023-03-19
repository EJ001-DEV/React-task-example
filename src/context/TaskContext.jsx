import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(TaskId) {
    /*
    filter(predicate: (value: never, index: number, array: never[]) => value is never, thisArg?: any): never[]
    A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


    Returns the elements of an array that meet the condition specified in a callback function.    
    */
    setTasks(tasks.filter((task) => task.id !== TaskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}      
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//export default TaskContextProvider
