 import './styles/theme.css';
 import './styles/global.css';
 import { Container } from './Componentes/Container';
 import { Menu } from './Componentes/Menu';
 import { Logo } from './Componentes/Logo';


 export function App() {


    return (
    <>
    <Container>
       <Logo/>
    </Container>
       
       <Container>
       <Menu/>
    </Container>

    </>
   );
} 

