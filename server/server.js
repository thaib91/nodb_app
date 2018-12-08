const express = require(`express`);
const ctrl = require(`./controller/mainController`)

const app = express();
app.use(express.json());


app.get(`/api/meme`, ctrl.getOne)//pre loads in componentOnChange the first image

app.get(`/api/memes`, ctrl.randomOne)

app.delete(`/api/meme/:id`, ctrl.deleteOne)

app.put(`/api/memes/:id`, ctrl.editPost)

app.post(`/api/meme`, ctrl.createPost) 







const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))