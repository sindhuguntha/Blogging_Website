import mongoose  from 'mongoose';
import User from '../modules/user.js';


export const loginuser = (req,res)=>{
    const {username,socialId} = req.body;
    User.findOne({ socialId: socialId })
        .then((foundUser) => {
            if (foundUser) {
                res.json(foundUser);
            } else {
                const newUser = new User({
                    username: username,
                    socialId: socialId,
                });
                newUser
                    .save()
                    .then(() =>
                        User.findOne({
                            socialId: socialId,
                        }).then((foundNewUser) => res.json(foundNewUser))
                    )
                    .catch((err) => res.status(400).json("Error: " + err));
            }
        })
        .catch((err) => res.status(400).json("Error : " + err));
}
