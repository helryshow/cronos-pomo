import { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../Componentes/Models/TaskStateModels";

 const initialState: TaskStateModel = {
    task: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '21:10',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
 };
 
 type TaskStateModelProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
 };

 const initialContextValue = {
    state: initialState,
    setState: () =>{},
 }
 
export const TaskContext = createContext<TaskStateModelProps> (initialContextValue);

type TaskContextProviderProps = {
    children: React.ReactNode
};

export function TaskContextProvider({children}:TaskContextProviderProps) {
      const [state, setState] = useState(initialState);
      
    return (
      <TaskContext.Provider value={{state, setState }}>
        {children}
      </TaskContext.Provider>
    );
}

export function useTaskContext() {
  return useContext(TaskContext);
}