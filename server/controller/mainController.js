let id=1;
let commentArr = [];//possibly make equal to an index in the array?
let memeArr = [
    {
        meme: 'https://i.ytimg.com/vi/SNggmeilXDQ/maxresdefault.jpg',
        comments: [{text:'',commentID:''}],
    },
    {
        meme: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/daag1-2R2K5G51WGC-Full-Image_GalleryBackground-en-US-1534985146767._RI_SX940_.png',
        comments: [{text:'',commentID:''}],

    },
    {
        meme: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
        comments: [{text:'',commentID:''}],
    }
]//use objects housing meme and gif


module.exports = {
    getOne: (req, res) => {
        res.status(200).send(commentArr)
    },

    randomOne: (req, res) => {
        let randomImg = memeArr[(Math.floor(Math.random() * memeArr.length))]
        res.status(200).send(randomImg)
    },

    createPost: (req, res) => { 
        let textBox={text:req.body.text, id:id}
        commentArr.push(textBox)
        id++;

        res.status(200).send(commentArr)
    },

    deleteOne: (req,res)=>{
        console.log(req.params.id)
        const deleteID = req.params.id;
        index = commentArr.findIndex(comment => comment.id == deleteID);
        commentArr.splice(index, 1);
        res.status(200).send(commentArr); 

    },

    editPost:(req,res)=>{
        const {text} = req.body;
        const updateID=req.params.id;
        const index = commentArr.findIndex(comment=>comment.id == updateID)
        let comment = comment[index]

        commentArr[index] = {
            id: comment.id,
            text: text || comment.text
        };
            res.status(200).send(commentArr)
    }

}


// <button onClick={this.changeImg}><img src={this.state.img} ><button/>