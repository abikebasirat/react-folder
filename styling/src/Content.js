import React from 'react'
import './content.css'


const Content = () => {
    const handleNameChange = () => {
        const names = ["Fulaani", "Hoyee", "Zainabuuuuu"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
      };

      const handleClick = () => {
        console.log("You clicked")
      }

      const handleClick2 = (name) => {
        console.log(`${name} was Clicked`)
      }
  return (
    <main className='student'>
    
        <h1>{handleNameChange()}</h1>
        <button onClick={handleClick}>Click me</button>
        <button onDoubleClick={() => handleClick2("Hayzed")}>Click me</button>
  
    </main>
  )
}

export default Content