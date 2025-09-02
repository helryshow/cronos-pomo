import { Container } from "../../Componentes/Container";
import { CountDown } from "../../Componentes/CountDown";
import { MainForm } from "../../Componentes/MainForm";
import type { TaskStateModel } from "../../Componentes/Models/TaskStateModels";
import { MainTemplate } from "../../Templates/MainTemplate";

type HomeProps = {
   state: TaskStateModel,
   setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

 export function Home(props:HomeProps) {
const{ state, setState }= props;
   
    return (
     <MainTemplate>
        <Container>
               <CountDown formattedSecondsRemaining={state.formattedSecondsRemaining}/>
            </Container>
        
             <Container>
              <MainForm />
            </Container>
     </MainTemplate>
   );
}

