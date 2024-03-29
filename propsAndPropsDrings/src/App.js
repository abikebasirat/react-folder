import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  // const name = "Hayzed";

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")))
   
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  
  const setAndSaveItems =(newItems) => {
     setItems(newItems)
       localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }
 const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listItems = [...items, myNewItem]
  setAndSaveItems(listItems)
  // setItems(listItems);
 
 };

  const handleCheck = (id) => {
    // console.log(key: ${id});
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
      );
      setAndSaveItems(listItems)
    // setItems(listItems);
    // localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id); 
      setItems(listItems);
    }
    // setAndSaveItems(listItems)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header  title = "Welcome to props"/>
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      

      
      <Content 
      items ={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
      
      
     </div>
     
  );
}

export default App;
