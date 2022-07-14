import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import './cv.css';

function SignIn() {
    
    const { t } = useTranslation();
  
    return (    
      <>
        <Header />
        <div className="holder-cv">
          <h1>
            {t('curriculo.title')}
          </h1>
          <div>
            <h3>
            {t('curriculo.dadosPessoais.title')}
            </h3>            
            <ul>
              <li>
              {t('curriculo.dadosPessoais.nome')}
              </li>
              <li>
              {t('curriculo.dadosPessoais.aniversario')}
              </li>
              <li>
                +55 (11) 98224-7422
              </li>
            </ul>
          </div>
          <div>
            <h3>
            {t('curriculo.formacaoAcademica.title')}
            </h3>
            <ul>
              <li>
                {t('curriculo.formacaoAcademica.item-1')}
              </li>
              <li>
                {t('curriculo.formacaoAcademica.item-2')}
              </li>
              <li>
                {t('curriculo.formacaoAcademica.item-3')}
              </li>
              <li>
                {t('curriculo.formacaoAcademica.item-4')}
              </li>
            </ul>
          </div>

          <div>
            <h3>
            {t('curriculo.intercambioCultural.title')}
            </h3>
            <ul>
              <li>
              {t('curriculo.intercambioCultural.item')}
              </li>
            </ul>
          </div>

          <div>
            <h3>
            {t('curriculo.cursoLivre.title')}
            </h3>
            <ul>
              <li>
              {t('curriculo.cursoLivre.item-1')}
              </li>
            </ul>
          </div>

          <div>
            <h3>
            {t('curriculo.conhecimentoGerais.title')}
            </h3>
            <h4>
            {t('curriculo.conhecimentoGerais.subtitle-1')}
            </h4>
            <ul>
              <li>
                {t('curriculo.conhecimentoGerais.adminText-1')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.adminText-2')}
              </li>
            </ul>
            <h4>
            {t('curriculo.conhecimentoGerais.subtitle-2')}
            </h4>
            <ul>
              <li>
                {t('curriculo.conhecimentoGerais.webItem-1')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.webItem-2')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.webItem-3')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.webItem-4')}
              </li>
            </ul>
            <h4>
            {t('curriculo.conhecimentoGerais.subtitle-3')}
            </h4>
            <ul>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-1')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-2')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-3')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-4')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-5')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-6')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-7')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-8')}
              </li>
              <li>
                {t('curriculo.conhecimentoGerais.itItem-9')}
              </li>
            </ul>
          </div>

          <div>
            <h3>
            {t('curriculo.idioma.title')}
            </h3>
            <ul>
              <li>
                {t('curriculo.idioma.lingua')}
                <br/>
                - {t('curriculo.idioma.conversa')}
                <br/>
                - {t('curriculo.idioma.escrita')}
              </li>
            </ul>
          </div>

          <div>
            <h3>
              {t('curriculo.atividadesProfissionais.title')}
            </h3>
            <ul>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-1')}
              </li>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-2')}  
              </li>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-3')}
              </li>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-4')}
              </li>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-5')}
              </li>
              <li>
                {t('curriculo.atividadesProfissionais.profissionalItem-6')}
              </li>
            </ul>
          </div>

          <div>
            <h2>
            {t('curriculo.acaoSocial.title')}
            </h2>
            <ul>
              <li>
                {t('curriculo.acaoSocial.socialItem-1')}
              </li>
              <li>
                {t('curriculo.acaoSocial.socialItem-2')}
                  <br/>
                  - {t('curriculo.acaoSocial.socialSubItem-1')}
                  <br/>
                  - {t('curriculo.acaoSocial.socialSubItem-2')}
                  <br/>
                  - {t('curriculo.acaoSocial.socialSubItem-3')}
                  <br/>
                  - {t('curriculo.acaoSocial.socialSubItem-4')}
                </li>
            </ul>
          </div>

        </div>
      </>
    )
  }
export default SignIn;