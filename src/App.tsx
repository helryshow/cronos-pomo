 import './styles/theme.css';
 import './styles/global.css';
 import { Container } from './Componentes/Container';
 import { Menu } from './Componentes/Menu';
 import { Logo } from './Componentes/Logo';
import { CountDown } from './Componentes/CountDown';


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

    </>
   );
} 

