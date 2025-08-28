import { Container } from "../../Componentes/Container";
import { Footer } from "../../Componentes/Footer";
import { Logo } from "../../Componentes/Logo";
import { Menu } from "../../Componentes/Menu";


type MainTemplateProps = {
    children: React.ReactNode
};

   export function MainTemplate({ children }: MainTemplateProps) {


    return (
    <>
    <Container>
       <Logo/>
    </Container>
       
       <Container>
       <Menu/>
    </Container>

    {children}

      <Container>
       <Footer />
      </Container>

    </>
   );
}

