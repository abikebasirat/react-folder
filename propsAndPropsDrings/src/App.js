import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';


function App() {
  // const name = "Hayzed";

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
      item: "Semo",
    },
    {
      id: 4,
      checked: false,
      item: "Ponmo",
    },
  ]);

  const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
    // console.log(key: ${id});
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id); 
      setItems(listItems);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;

    setNewItem('')
  }

  return (
    <div className="App">
      <Header  title = "Welcome to props"/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
      
      
     </div>
     
  );
}

export default App;
