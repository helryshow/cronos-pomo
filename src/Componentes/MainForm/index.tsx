import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefautButton } from "../DefautButton/Index";
import { DefautInput } from "../DefautInput/Index";


  
  export function MainForm() {
    return (
        <form className='form' action="">
         <div className="formRow">
           <DefautInput labelText='task' id='input' type='text' placeholder='Digite aqui' />
         </div>

         <div className="formRow">
            <p>Próximo intervalo é:12 min</p>
         </div>

          <div className="formRow">
            <Cycles/>
         </div>

         <div className="formRow">
            <DefautButton icon= {<PlayCircleIcon/>} />
         </div>
       </form>
    );
  }
  
  