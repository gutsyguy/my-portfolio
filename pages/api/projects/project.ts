import { NextApiRequest, NextApiResponse } from "next";
import data from "../data";


export const handler = async(req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === "GET"){
        res.send(data.projects) 
    }
}


export default handler