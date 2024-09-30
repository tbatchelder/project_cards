import { useState } from "react";

function Trick({ category, title, description }) {
  const [flipped, setFlipped] = useState(false)
  
  function handleClick() { setFlipped(!flipped) }
  
  return (
    <div
      onClick={
        () => { handleClick() }
      }
    >
      
      {!flipped &&
        <>
          <div className="card">
            <p>{category}</p>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
          </div>
        </>
      }
      {flipped &&
        <>
          <div className="card-back">
            {/* <p>{category}</p>
            <h2>{title}</h2> */}
            <p>{description}</p>
          </div>
        </>
      }
    </div>
  );
}

export default Trick