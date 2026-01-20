import cors from "cors";
import express from "express";

const app = express();
const PORT = 4000;
app.use(cors());
app.get("/", (req, res) => {
    res.send("Backend is running and move a /api/users");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Hamza" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Ramdan" },
    { id: 5, name: "Shameer" },
    { id: 6, name: "Uzair" },
    { id: 7, name: "Saad" },
    { id: 8, name: "Khan" },
    { id: 9, name: "Bilal" },
    { id: 10, name: "Ahsan" },
    { id: 11, name: "Daniyal" },
    { id: 12, name: "Fahad" },
    { id: 13, name: "Hassan" },
    { id: 14, name: "Ibrahim" },
    { id: 15, name: "Junaid" },
    { id: 16, name: "Kashif" },
    { id: 17, name: "Mubashir" },
    { id: 18, name: "Noman" },
    { id: 19, name: "Osama" },
    { id: 20, name: "Zain" }
  ]);
});


app.listen(PORT, () => {
    console.log(`Backend running on port localhost:${PORT}`);
});
