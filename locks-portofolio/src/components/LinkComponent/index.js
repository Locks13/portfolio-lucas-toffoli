import { Link } from "react-router-dom";

function LinkComponent(props) {

    return (    
      <>
        <Link className={props.linkClass} to={props.link}>{props.text}</Link>
      </>
    )
  }
export default LinkComponent;