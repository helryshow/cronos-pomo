 import './styles/theme.css';
 import './styles/global.css';
import { Heading } from './Componentes/Heading';
import { TimerIcon } from 'lucide-react';

 export function App() {


    return (
    <div>
    <Heading>
      Olá Mundo Cruel <button><TimerIcon></TimerIcon></button>  
    </Heading>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sequi vel perferendis quo. 
    Facilis voluptatibus dolorem maiores repellat, voluptate ratione ut. Unde, sapiente labore a doloremque 
    corporis aut blanditiis ducimus?
    </p>
   </div>
   );
}

