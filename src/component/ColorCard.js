// import React,{useState} from "react";

// import './ColorCard.css';

// // const colorNames = {
// //     '#ff0000': 'Red',
// //     '#00ff00': 'Green',
// //     '#0000ff': 'Blue',
// //     '#ffff00': 'Yellow',
// //     '#ffffff': 'White'
// //   };
  
// const ColorCard = () =>{

//     const [selectedColor, setSelectedColor] = useState([]);
//     const [selectedColorName, setSelectedColorName] = useState([]);
  
//     const handleColorChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       console.log(name , value);
//       setSelectedColor([name]);
//       setSelectedColorName([value]);
//     };
  
//     return (
//       <div>
//         <input type="color" name="first" id="first" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor}</p>
//         <p>ColorName: {selectedColorName}</p>
//         <input type="color" name="second" id="second" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="third" id="third" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="fourth" id="fourth" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="five" id="five" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="six" id="six" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="seven" id="seven" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="eight" id="eight" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="nine" id="nine" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//         <input type="color" name="ten" id="ten" value={selectedColor} onChange={handleColorChange} />
//         <p>ColorCode: {selectedColor.name}</p>
//         <p>ColorName: {selectedColorName.value}</p>
//       </div>
//     );
//   }
  
//   export default ColorCard;







// import React, { useState } from 'react';

// const colorNames = {
//   '#ff0000': 'Red',
//   '#00ff00': 'Green',
//   '#0000ff': 'Blue',
//   '#ffff00': 'Yellow',
//   '#000000': 'Black'
// };

// function ColorCard() {
//   const [selectedColor, setSelectedColor] = useState();
//   const [selectedColorName, setSelectedColorName] = useState();

//   const handleColorChange = (event) => {
//     const colorCode = event.target.value;
//     console.log(colorCode);
//     setSelectedColor(colorCode);
//     setSelectedColorName(colorNames[colorCode]);
//   };

//   return (
//     <div>
//       <input type="color" value={selectedColor} onChange={handleColorChange} />
//       <p>Selected color--code: {selectedColor}</p>
//       <p>Selected color--name: {selectedColorName}</p>
//     </div>
//   );
// }

// export default ColorCard;

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