let id=1;
let commentArr = [];//possibly make equal to an index in the array?
let memeArr = [
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/1.jpg',
        comments: [{text:'',commentID:''}],
        id: id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/2.jpg',
        comments: [{text:'',commentID:''}],
        id:id

    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/3.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/4-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/5-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/6-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/7-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/8-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/9-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/11-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/19.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/12-1.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/20.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/9-1.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://www.probytes.net/wp-content/uploads/2018/01/8-1.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.pinimg.com/originals/f8/d6/7c/f8d67cf2b8e7a3d92a28804f6863064e.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://25.media.tumblr.com/tumblr_m2p4he6zGI1rs85cno1_500.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlLnJLt8CmS9lzE7s0kGZ8vYFPB7MFfjeuLwtfKj3ngWo6a8O',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://pm1.narvii.com/5771/3dae42b98369306cf7b840514fc3b3a65c9c955a_00.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.pinimg.com/236x/5b/f4/ec/5bf4ec369f2aa5daf9b14b64aeb12ab5--pokemon-memes-pokemon-funny.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.pinimg.com/originals/25/df/d3/25dfd3d44f6f404af5a07503ad1847d7.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://cdn.ebaumsworld.com/mediaFiles/picture/166932/83076924.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://assets3.thrillist.com/v1/image/2766357/size/gn-gift_guide_variable_c.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://creativeinspirationblog.files.wordpress.com/2013/08/best-memes-of-2012-bro-my-god-120512-12.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.pinimg.com/236x/6c/99/a0/6c99a0b8d272be67d80c5230ebadae61--computer-jokes-computer-science.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://www.dailymoss.com/wp-content/uploads/2018/01/26073214_140345453318183_7449441902409023488_n.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.imgur.com/DK47NjE.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://img.devrant.com/devrant/rant/r_366494_dUAD7.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://www.dailymoss.com/wp-content/uploads/2018/01/cat_meme_programming.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://pbs.twimg.com/media/Dcg4WXFX4AA1b_5.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://www.quickmeme.com/img/88/88e4e5487c2150fde4f93a8a7270d216457d34b52819ba9fc4f16f3e1504bc4d.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://scontent-atl3-1.cdninstagram.com/vp/86fc9f6745cc23f6840a506af794cbe8/5C88142E/t51.2885-15/e35/44194005_326637204817530_4741458411204496883_n.jpg',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://devhumor.com/content/uploads/images/November2018/Javascript_devs.png',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'http://ohsohumorous.com/var/albums/funny-memes-OhSoHumorous-038618.jpg?m=1498702496',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://lh3.googleusercontent.com/-VHV916run58/WC9To_x72tI/AAAAAAAACkE/f59cQ9_9-XY/safe_image_thumb.gif?imgmax=800',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://i.pinimg.com/originals/6e/5e/aa/6e5eaa6af6a707ab4d65b126bc3edb8b.gif',
        comments: [{text:'',commentID:''}],
        id:id
    },
    {
        meme: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/8/27/12/anigif_enhanced-buzz-26719-1377620067-4.gif',
        comments: [{text:'',commentID:''}],
        id:id
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
        let textBox={id:id, text:req.body.text }
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

    // editPost:(req,res)=>{
    //     // const {text} = req.body;
    //     const updateID= +req.params.id;
    //     const index = commentArr.findIndex(comment=>comment.id == updateID)
    //     let comment = commentArr[index]

    //     commentArr[index] = {
    //         id: updateID,
    //         text: req.body.text
    //     };
    //         res.status(200).send(commentArr)
    // },

    editPost: (req, res, next) => { 

        let index = commentArr.findIndex((comment) => comment.id === +req.params.id)
        console.log(index)

        if(index !== -1){
            commentArr[index]={
                id:req.params.id,
                text:req.body.text
            }
            console.log(commentArr[index])
        }
        
        //does the object need to be in the same order?

        res.status(200).send(commentArr)
    }



}


// <button onClick={this.changeImg}><img src={this.state.img} ><button/>