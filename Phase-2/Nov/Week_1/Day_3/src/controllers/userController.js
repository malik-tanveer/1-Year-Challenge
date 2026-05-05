export const getUsers = (req, res) => {
    const users = [
        { id: 1, name: "Malik" },
        { id: 2, name: "Shahab" },
    ];
    res.json(users);
};