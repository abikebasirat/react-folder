
import ItemList from "./ItemList";
import "./content.css";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Basirah')
  

  return (
    <>
      {items.length ?(
        <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
        />
         
   
      ) : (
        <p style={{marginTop: "2rem"}}> You list is empty</p>
      )}
    </>
  );
};

export default Content;