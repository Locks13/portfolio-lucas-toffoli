import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import './flags.css'
import FlagIcon from './FlagIcon';

function CountryFlags() {

    const languages = [
        {
          code: 'pt',
          name: 'Portugues',
          country_code: 'br',
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'us',
        },
    ]

    const { i18n } = useTranslation()

    return (    
      <>
        <div className="flags" >
        {languages.map(({ code, name, country_code }) => (
            <button
            className="flags-item"
            onClick={() => { i18n.changeLanguage(code) }}
            >
                <FlagIcon code={country_code} key={country_code} />
            </button>
        ))}
        </div>
      </>
    )
  }
  
  export default CountryFlags;