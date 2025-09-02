import { Container } from "../../Componentes/Container";
import { CountDown } from "../../Componentes/CountDown";
import { MainForm } from "../../Componentes/MainForm";
import type { TaskStateModel } from "../../Componentes/Models/TaskStateModels";
import { MainTemplate } from "../../Templates/MainTemplate";

export type HomeProps = {
   state: TaskStateModel,
   setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

 export function Home(props:HomeProps) {
   
    return (
     <MainTemplate>
        <Container>
               <CountDown {...props}/>
            </Container>
        
             <Container>
              <MainForm  {...props}/>
            </Container>
     </MainTemplate>
   );
}

