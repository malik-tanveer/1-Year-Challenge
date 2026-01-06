import axios from "axios"
import { useState } from "react";

const Update_form = ({ item, onUpdated, closeForm }) => {
    const [name, setName] = useState(item.name);
    const [email, setEmail] = useState(item.email);
    const [title, setTitle] = useState(item.title);
    const [desc, setDesc] = useState(item.description);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedItem = { name, email, title, desc };
        try {
            await axios.put(`http://localhost:5000/api/items/${item._id}`, updatedItem);
            onUpdated();
            closeForm()
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    }
    return (
        <>
            <form onSubmit={handleUpdate}>
                <h3>Edit Item</h3>

                <input type="text" value={name} name='name' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={email} name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={title} name='title' placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />

                <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />

                <button type="submit">Update</button>
                <button type="button" onClick={closeForm}>Cancel</button>

            </form>
        </>
    )
}

export default Update_form