import { HashLink } from 'react-router-hash-link';
import './HashButton.css';

function HashButton(props) {
    return (    
      <>
        <HashLink to={`/${props.link}`} className={props.color}>{props.text}</HashLink>
      </>
    )
  }
export default HashButton;