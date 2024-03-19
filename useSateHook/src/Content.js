import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
// import { IoMdCheckmark } from "react-icons/io";
import "./content.css";

const Content = () => {
  // const [name, setName] = useState('Bsirah')
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri",
    },
    {
      id: 2,
      checked: false,
      item: " Rice",
    },
    {
      id: 3,
      checked: false,
      item: " Semo",
    },
    {
      id: 4,
      checked: false,
      item: " Ponmo",
    },
  ])

  // const handleNameChange = () => {
  //     const names = ["Fulaani", "Hoyee", "Zainabuuuuu"];
  //     const int = Math.floor(Math.random() * 3);
  //     setName(names[int])
  //   };

  //   const handleClick2 = (name) => {
  //     console.log(`${name} was Clicked`)
  //   }
  return (
    <main className="student">
      {/* <h1>{name}</h1>
        <button onClick={handleNameChange}>Cange Name</button>
        <button onClick={handleClick}>Click me</button>
        <button onDoubleClick={() => handleClick2("Hayzed")}>Click me</button> */}

      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />

            <label>{item.item}</label>
            <FaTrash/>
            {/* <IoMdCheckmark /> */}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;

