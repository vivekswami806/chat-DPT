import express from 'express';
import getResponseFromGpt from './getResponseFromGpt.js';
import dotenv from 'dotenv';
import cors from 'cors';
let app = express();
dotenv.config(); 
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
    let userInput = req.body.userInput;
    // if(!userInput) {
        let result = await getResponseFromGpt(userInput);
        res.json({result});
    // } 
    // else {
    // res.status(404).json(false);
    // }
    })


app.listen(3030, async () => { console.log("--- Server is running On 3030")});