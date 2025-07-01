 import './styles/theme.css';
 import './styles/global.css';
 import { Container } from './Componentes/Container';
 import { Heading } from './Componentes/Heading';
 import { Logo } from './Componentes/Logo';


 export function App() {


    return (
    <>
    <Container>
       <Logo/>
    </Container>
       
       <Container>
       <Heading>MENU</Heading>
    </Container>

    </>
   );
} 

