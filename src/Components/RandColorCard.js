import React from "react";

// const divStyle = (red, green, blue) => {
//   return(
//     color: rgb(red, green, blue)
//     )
// };

const randColorCard = props => {
  // let rgbArray = [];

  // for (var i = 0; i < 3; i++) {
  //   let r = props[i];
  //   rgbArray.push(r);
  // }
  // console.log(props.red, props.green, props.blue);
  let rgbArray = [props.red, props.green, props.blue];

  let divStyle = {
    width: "150px",
    height: "75px",
    backgroundColor: `rgb(${rgbArray})`
  };

  console.log(divStyle.backgroundColor);

  return (
    <div>
      <div style={divStyle}>
        {/* Card with red = {props.red}, green = {props.green}, and blue ={props.blue} */}
        {/* {props.blue} */}
      </div>
    </div>
  );
};

export default randColorCard;
