const express = require("express");


//app configuration
const app = express();
const port = 3000;

//middleware configuration
app.use(express.json());

//define item list
let itemList = [
  { id: 1, name: 'name' },

];

//api routes
app.get('/api/v1/items', (req, res) => {
  return res.json(itemList);
});
app.post('/api/v1/items', (req, res) => {
  let newTask = {
    id: itemList.length + 1,
    name: req.body.name,
  }
  itemList.push(newTask);
});
app.put('/api/v1/items/:id', (req, res) => { });
app.delete('/api/v1/items/:id', (req, res) => { });

//listeners
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})