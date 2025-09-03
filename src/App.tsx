
import { Home } from './Page/Home';

 import './styles/theme.css';
 import './styles/global.css';

import { TaskContextProvider } from './context/TaskContextc';

 export function App() {

    return (
   <TaskContextProvider>
      <Home />
   </TaskContextProvider>
    );
}

