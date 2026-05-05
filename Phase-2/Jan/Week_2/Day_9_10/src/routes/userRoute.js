import express from "express";

const router = express.Router();

const users = [
    {
        id: 1,
        name: "Ali Khan",
        email: "ali@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Ahmed Raza",
        email: "ahmed@gmail.com",
        password: "123456"
    },
    {
        id: 3,
        name: "Usman Tariq",
        email: "usman@gmail.com",
        password: "123456"
    },
    {
        id: 4,
        name: "Bilal Ahmed",
        email: "bilal@gmail.com",
        password: "123456"
    },
    {
        id: 5,
        name: "Hassan Ali",
        email: "hassan@gmail.com",
        password: "123456"
    },
    {
        id: 6, name: "Saad Khan",
        email: "saad@gmail.com",
        password: "123456"
    },
    {
        id: 7, name: "Hamza Malik",
        email: "hamza@gmail.com",
        password: "123456"
    },
    {
        id: 8, name: "Adeel Shah",
        email: "adeel@gmail.com",
        password: "123456"
    },
    {
        id: 9, name: "Fahad Iqbal",
        email: "fahad@gmail.com",
        password: "123456"
    },
    {
        id: 10,
        name: "Zain Abbas",
        email: "zain@gmail.com",
        password: "123456"
    },
    {
        id: 11,
        name: "Umar Farooq",
        email: "umar@gmail.com",
        password: "123456"
    },
    {
        id: 12,
        name: "Shahzaib Khan",
        email: "shahzaib@gmail.com",
        password: "123456"
    },
    {
        id: 13, name: "Noman Ali",
        email: "noman@gmail.com",
        password: "123456"
    },
    {
        id: 14,
        name: "Imran Sheikh",
        email: "imran@gmail.com",
        password: "123456"
    },
    {
        id: 15, name: "Taha Raza",
        email: "taha@gmail.com",
        password: "123456"
    },
    {
        id: 16,
        name: "Arslan Khan",
        email: "arslan@gmail.com",
        password: "123456"
    },
    {
        id: 17,
        name: "Rehan Malik",
        email: "rehan@gmail.com",
        password: "123456"
    },
    {
        id: 18,
        name: "Salman Ahmed",
        email: "salman@gmail.com",
        password: "123456"
    },
    {
        id: 19,
        name: "Danish Ali",
        email: "danish@gmail.com",
        password: "123456"
    },
    {
        id: 20,
        name: "Junaid Khan",
        email: "junaid@gmail.com",
        password: "123456"
    }
];

router.get("/", (req, res) => {
    res.json({users});
});

router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ user });
});

export default router;
