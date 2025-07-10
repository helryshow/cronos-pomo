 import './styles/theme.css';
 import './styles/global.css';
 import { Container } from './Componentes/Container';
 import { Menu } from './Componentes/Menu';
 import { Logo } from './Componentes/Logo';
import { CountDown } from './Componentes/CountDown';
import { DefautInput } from './Componentes/DefautInput/Index';


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
           <DefautInput labelText='task' id='input' type='text' />
         </div>

         <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
         </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 00 00</p>
         </div>

         <div className="formRow">
            <button>Enviar</button>
         </div>
       </form>
    </Container>

    </>
   );
} 

