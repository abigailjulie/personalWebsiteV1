import { comparePassword } from "../helpers/auth.js";

//This is what I see instead of my login page now
//Please help if you can, thank you!
export function test (req, res) {
    res.json('test is working');
};

export async function loginUser (req, res) {
    try {
        const { password } = req.body;

        //Check if match
        const match = await comparePassword(password, user.password)
        if(match) {
            //assign webtoken to track throughout application
            res.json('passwords match')
        }
    } catch (error) {
        console.log(error)
    }
};

export default {
    test, 
    loginUser
}