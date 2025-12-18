import express from 'express';

const app = express();
const PORT = 3000;
// const api = "https://jsonplaceholder.typicode.com/posts";


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/post" , async (req, res)=>{
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    console.log(data);
    res.status(200).json({
      data: data.slice(0,5)
    });
  } catch (error){
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});