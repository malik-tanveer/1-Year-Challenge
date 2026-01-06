import axios from 'axios';
import { useEffect, useState } from "react"
import Update_form from './Update_form';

const Fetch_from = () => {
    const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const res = await axios.get("http://localhost:5000/api/items");
        setItems(res.data);
    }

      const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      fetchItems(); // refresh the list after deleting
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

    return (
        <>
            {items.map((item) => {
                return (
                    <div key={item._id}>
                        <h1>{item.name}</h1>
                        <h1>{item._id}</h1>

                        <p>{item.email}</p>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                         <button onClick={() => handleDelete(item._id)}>Delete</button>
    
                        <button onClick={() => setEditingItem(item)}>
                            Edit
                        </button>
                        

                    </div>
                )
            })}
            {editingItem && (
                <Update_form
                    item={editingItem}
                    onUpdated={fetchItems}
                    closeForm={() => setEditingItem(null)}
                />
            )}
        </>
    )
}

export default Fetch_from