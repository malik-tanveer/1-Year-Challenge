import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Home page");
});

app.listen(PORT, ()=>{
    console.log(`Server is Runing on localhost:${PORT}`);
})