import { NextApiRequest, NextApiResponse } from "next";
import data from "../../data";

export const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method == "GET"){
        const {project} = req.query  
        const projectInfo = data.projects.find(x => x._id == project);
        if (projectInfo) {
            res.json(projectInfo);
        } else {
        res.status(404).json({ message: "project not found" });
        }
    } 
 }

export default handler