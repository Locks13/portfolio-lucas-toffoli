import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
    return (    
      <>
        <Link to={props.link} className={props.color}>{props.text}</Link>
      </>
    )
  }
export default Button;