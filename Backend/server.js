import express from 'express';
console.log('Starting server...');
const port = 3000;

const app = express();

app.get('/',(req,res) => {
res.send(`Server is ready`)
})


app.listen(port,() =>{
    console.log(`server is listening  at http://127.0.0.1:${port}`);
});


