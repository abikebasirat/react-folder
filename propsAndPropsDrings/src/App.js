import { useState, useEffect } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import apiRequest from "./apiRequest";

function App() {

  // API

  const API_URL =' http://localhost:3500/items'

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      try {

        const response =  await fetch(API_URL);
      if(!response.ok) throw Error('The data is not accessible!')

        const listItems =  await response.json();
        console.log(listItems); 
        setItems(listItems)

      } catch (err) {
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }

      setTimeout(() => {
        (async () => await  fetchItem())()
      }, 2000);


  }, []);

  const addItem =async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems)

    // POST
    const postOption  = {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(myNewItem)
  }

  const result = await apiRequest(API_URL, postOption);
  if(result) setFetchError(result)
    
  };

  const handleCheck = async(id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    setFetchError(null);

    // UPDATE

    const myItem = listItems.filter((item)=> item.id === id)
    const updateOption = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOption);
    if(result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    
    // setAndSaveItems(ListItems); //REMOVE THIS
    setItems(listItems);

    // DELETE

    const delOption = {
      method: "DELETE"
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, delOption);
    if(result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <main className="App">
      <Header title="Grocery List" />

      <SearchItem search={search} setSearch={setSearch} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <main>
        {isLoading &&  <p>Loading items...</p>}
        {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}

        {!fetchError &&  !isLoading &&<Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
     


      <Footer length={items.length} />
    </main>
  );
}

export default App;