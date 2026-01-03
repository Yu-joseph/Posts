//create new express aplication
const { randomBytes } = require('crypto');
const express = require('express');
const app =  express();
const posts = {};
app.get('/posts', (req,res) => {
    res.send(posts);
});

app.post('/post', (req, res) => {

});
// where my server gonna list its mandatory
app.listen(8080, () => {
    console.log('my server listining in 8080');
});

// app.delete('/delete', (req, res)=>{

// });
// app.get('/get', (req, res)=> {

// });