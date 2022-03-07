
import { FacebookIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from "../../components/SocilaMedia"

import './about.css';

function About() {
    return (    
      <div className="holder-about">
        <div className="aboutme">
            <h1>Sobre mim</h1>
            <p>
            Tenho Interesse por tecnologias e linguagens para Internet desde cedo, pois meus pais são atuantes na área. Desde o início da minha carreira, em 2005, trabalhei com tecnologias para comunicação online.
            </p>
            <p>
              Em minha atuação, tenho foco no uso de novas tecnologias/linguagens, tendo por objetivo o zelo pelo melhor desempenho dos projetos nos quais participo. Seja buscando a melhor combinação de código limpo, boas práticas em sintonia com o ritmo da empresa, de modo que o projeto seja fácil de ser mantido, atualizado e melhorado, por todos da equipe da qual faço parte, ou mesmo em projetos que atue sozinho, para que estes possam ser facilmente entendidos por outros colegas que venham cuidar deles futuramente.
            </p>
            <p>
              Considero cada novo projeto um novo desafio, e vejo nele também o meu crescimento pessoal e ou técnico.
            </p>
            <p>
              Em minha trajetória profissional sempre valorizei o trabalho em equipe, considero o compartilhar conhecimentos, a combinação de qualidades benéficas ao projeto, seja para os integrantes da equipe, ou as pessoas que serão afetadas pelo projeto, sejam clientes ou usuário final (exemplo: E-Commerce).
            </p>
            
            <p>
              Neste ponto da minha carreira considero-me um desenvolvedor crítico nos projetos que participo, busco identificar seus potenciais, suas eventuais falhas, aprendendo e agregando com criatividade melhorias para o desenvolvimento de um projeto.
            </p>
            <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <GitHubIcon />
            </div>
        </div>
      </div>
    )
  }
export default About;