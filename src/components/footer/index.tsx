import LinkadinLogo from './logo-linkadin.png'
import TypesCriptLogo from './Typescript_logo.png'
import ReactLogo from './react-logo.jpg'
import styledComponentsLogo from './styledcomponents-logo.png'
import { FooterStyled } from './styled'

export const Footer = () => {
  return <FooterStyled>
    <p>Feito por: Thiago Nunes | Desenvolvedor Web</p>
    <section className="linkadin">
      <span>Contato:</span>
      <a href='https://www.linkedin.com/in/thiago-nunes-3a7771219/'>
        Linkadin
        <img src={LinkadinLogo} alt="" srcSet="" className='linkadinlogo' />
      </a>
    </section>
    <span className='stacks'>
      Esta aplicação utiliza:
      <div>
        <img src={ReactLogo} alt="" srcSet="" />
        <p>React JS</p>
      </div>
      <div>
        <img src={styledComponentsLogo} alt="" srcSet="" />
        <p>StyledComponents</p>
      </div>
      <div>
        <img src={TypesCriptLogo} alt="" srcSet="" />
        <p>TypesCript</p>
      </div>
    </span>
  </FooterStyled>
}
