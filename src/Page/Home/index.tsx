import { Container } from "../../Componentes/Container";
import { CountDown } from "../../Componentes/CountDown";
import { MainForm } from "../../Componentes/MainForm";
import { MainTemplate } from "../../Templates/MainTemplate";


 export function Home() {
   
    return (
     <MainTemplate>
        <Container>
               <CountDown />
            </Container>
        
             <Container>
              <MainForm  />
            </Container>
     </MainTemplate>
   );
}

