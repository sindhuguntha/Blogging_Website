import mongoose  from 'mongoose';
import Post from '../modules/blogMessage.js';

export const getblogs = async(req,res)=>{
    try{
        const blogPosts= await Post.find();
        console.log(blogPosts);
        res.status(200).json(blogPosts);

    }
    catch(error){

        res.status(404).json({message:error.message});

    }
}

export const createblogs = async (req,res)=>{
    const {title,body,author} = req.body;
    const date = Date.parse(req.body.date);

    const comments = [];

    //Create a new Post and save it to DB
    const newBlog = new Post({
        title,
        body,
        author,
        date,
        comments,
    });
    try{
        await newBlog.save();
        res.status(201).json(newBlog);
        

    }
    catch(error){
        res.status(409).json({message:error.message});

    }


}

export const particularBlog = async(req,res)=>{
    const { id } = req.params;
    if(!mongoose.Type.ObjectId.isValid(id)) return res.status(404).send('No blog with that Id');
    const blog = await Post.findById(id);
    res.json(blog);

}

export const editBlog = async(req,res)=>{
    const {id:_id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updateBlog = await Post.findByIdAndUpdate(_id,post,{new:true});
    try{
        await updateBlog.save();
        res.status(201).json(updateBlog);
        

    }
    catch(error){
        res.status(409).json({message:error.message});

    }
}

export const deleteBlog = async(req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}