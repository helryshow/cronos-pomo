
import { Home } from './Page/Home';

 import './styles/theme.css';
 import './styles/global.css';
import type { TaskStateModel } from './Componentes/Models/TaskStateModels';
import { useState } from 'react';

 const initialState: TaskStateModel = {
    task: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '23:10',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
 };

 export function App() {
   const [state, setState] = useState(initialState);

    return (
        <Home state={state} setState={setState} />
    );
}

