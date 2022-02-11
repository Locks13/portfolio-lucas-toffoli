import Circle from "../../components/Circle"
import './knowledge.css';

function Knowledge() {

    return (    
      <>
        <div className="knowledge">
            <h1>
              Conhecimentos
            </h1>
            <span>
              <Circle percentage={70} colour={'#181c2e'}  />
              <p>
                React
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                Html
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                CSS
              </p>
            </span>
            <span>
              <Circle percentage={60} colour={'#181c2e'}  />
              <p>
                GitHub
              </p>
            </span>
             
          </div>
        
      </>
    )
  }
export default Knowledge;