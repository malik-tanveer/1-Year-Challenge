import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Server ka Home Page");
});

let posts = [];

app.post('/posts', (req,res)=>{
    const { title, body } = req.body; 


    if(!title || !body){
        return res.status(400).json({
            message : "Title and Body are required"
        });
    }
    const newpost = {
        id:posts.length+1,
        title,
        body
    };

    posts.push(newpost);

    res.status(201).json({
        message : "Post Created",
        data: { title, body }
    });
})


app.get('/post', (req,res)=>{
    res.status(200).json(posts)
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`);
})