 import './styles/theme.css';
 import './styles/global.css';
 import { Container } from './Componentes/Container';
 import { Menu } from './Componentes/Menu';
 import { Logo } from './Componentes/Logo';
import { CountDown } from './Componentes/CountDown';
import { DefautInput } from './Componentes/DefautInput/Index';
import { Cycles } from './Componentes/Cycles';
import { DefautButton } from './Componentes/DefautButton/Index';
import { PlayCircleIcon } from 'lucide-react';


 export function App() {


    return (
    <>
    <Container>
       <Logo/>
    </Container>
       
       <Container>
       <Menu/>
    </Container>

     <Container>
       <CountDown/>
    </Container>

     <Container>
       <form className='form' action="">
         <div className="formRow">
           <DefautInput labelText='task' id='input' type='text' placeholder='Digite aqui' />
         </div>

         <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
         </div>

          <div className="formRow">
            <Cycles/>
         </div>

         <div className="formRow">
            <DefautButton icon= {<PlayCircleIcon/>} />
         </div>
       </form>
    </Container>

    </>
   );
} 

