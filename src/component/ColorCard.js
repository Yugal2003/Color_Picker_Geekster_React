import React from "react";
import './ColorCard.css';

const ColorCard = () =>{

  const array = [
    {
      id : 1,
      color : '#FF6663',
      code : '#FF6663',
      colorname : 'PINK'
    },
    {
      id : 2,
      color : '#333333',
      code : '#333333',
      colorname : 'GRAY'
    },
    {
      id : 3,
      color : '#000000',
      code : '#000000',
      colorname : 'BLACK'
    },
    {
      id : 4,
      color : '#38BB14',
      code : '#38BB14',
      colorname : 'GREEN'
    },
    {
      id : 5,
      color : '#C90B0B',
      code : '#C90B0B',
      colorname : 'RED'
    },
    {
      id : 6,
      color : '#FF8000',
      code : '#FF8000',
      colorname : 'ORANGE'
    },
    {
      id : 7,
      color : '#FFF500',
      code : '#FFF500',
      colorname : 'YELLOW'
    },
    {
      id : 8,
      color : '#CCCCCC',
      code : '#CCCCCC',
      colorname : 'LIGHT GRAY'
    },
    {
      id : 9,
      color : '#7E41A2',
      code : '#7E41A2',
      colorname : 'PURPLE'
    },
    {
      id : 10,
      color : '#C14911',
      code : '#C14911',
      colorname : 'BROWN'
    }
  ]
  return(
    <>  
        {
          array.map((currElm) =>{
              return(
                <>
                    <div className="div1" key={currElm.id}>
                        <input type="color" className="color" value={currElm.color} />
                        <h2 className="hex_code">{currElm.code}</h2>
                        <p style={{color: currElm.color}} className="color_text">{currElm.colorname}</p>
                    </div>
                </>
              )
          })
        }
    </>
  );
}

export default ColorCard;
