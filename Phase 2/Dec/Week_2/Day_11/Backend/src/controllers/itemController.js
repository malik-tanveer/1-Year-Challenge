import Item from "../models/Item.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: "Server Error!" });
        console.log(err);
    }
}

export const addItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json({ message: "Item Added", item });
    } catch (err) {
        res.status(400).json({ message: "Wrong Data Failed!" });
        console.log(err);
    }
}

export const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );

        if (!item) {
            return res.status(404).json({message : "Item Not Found!"});
        }
        
        res.status(200).json({ message: "Item Updated", item });
    } catch (err) {
        res.status(400).json({ message: "Update Failed try again" });
        console.log(err);
    }
}

export const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({message : "Item Not Found!"});
        }

        res.status(200).json({ message: "Item Deleted", item });
    } catch (err) {
        res.status(400).json({ message: "Delete Failed" });
        console.log(err);
    }
}