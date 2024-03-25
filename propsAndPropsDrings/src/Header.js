import React from 'react'

const Header = ({title}) => {
   
  return (
    <header >
        <h1>{title}</h1>
    </header>
        ///**** */Using varible in inline style
    // <header style={{background: "blue", color: "red", fontSise: "24px"}}>
    //     <h1>Cohort 4. 0 student's Details.</h1>


    // </header>
        ///**** */Direct inline styling
    // <header style={{background: "blue", color: "red", fontSise: "24px"}}>
    //     <h1>Cohort 4. 0 student's Details.</h1>
    // </header>
  );
};

Header.defaultProps = {
  title:"Default Title"
}

export default Header