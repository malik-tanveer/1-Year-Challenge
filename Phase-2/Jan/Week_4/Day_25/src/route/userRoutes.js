import express from "express";

const router = express.Router();

// fake user data
const users = [
  { id: 1, name: "Ali Khan", email: "ali@company.com" },
  { id: 2, name: "Ahmed Raza", email: "ahmed@startup.io" },
  { id: 3, name: "Sara Malik", email: "sara@techhub.dev" },
  { id: 4, name: "Usman Ali", email: "usman@softsolutions.pk" },
  { id: 5, name: "Ayesha Noor", email: "ayesha@digitalcrew.co" },
  { id: 6, name: "Bilal Hussain", email: "bilal@webstack.dev" },
  { id: 7, name: "Hira Sheikh", email: "hira@cloudcore.io" },
  { id: 8, name: "Fahad Ahmed", email: "fahad@nextgen.tech" },
  { id: 9, name: "Zain Abbas", email: "zain@codebase.dev" },
  { id: 10, name: "Maryam Iqbal", email: "maryam@productlabs.co" },
  { id: 11, name: "Hamza Tariq", email: "hamza@backendpro.io" },
  { id: 12, name: "Nimra Khan", email: "nimra@frontendx.dev" },
  { id: 13, name: "Saad Mahmood", email: "saad@saasworld.co" },
  { id: 14, name: "Laiba Aslam", email: "laiba@innovationhub.tech" },
  { id: 15, name: "Danish Farooq", email: "danish@systemflow.dev" }
];


// GET users
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

// POST user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser
  });
});

export default router;
