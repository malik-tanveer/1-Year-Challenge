import express from 'express';

const app = express();
const PORT = 5000;
app.use(express.json());

app.post('/api/users' ,(req,res)=>{
    const newUser = req.body;

    console.log("New User comming", newUser);

    res.status(201).json({
        message : "user Created Successfully",
        user : newUser,
    });
});



app.get('/', (req, res)=>{
    res.send("Server home pgae is Ready");
});

app.get('/about', (req,res)=>{
    res.send("Server is About Page and you show a server line about and move on a localhost:5000/about")
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`);
})