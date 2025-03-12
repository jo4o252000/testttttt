import { Router } from "express";
import submission from "../model/submission";

const router = Router();


router.post("/api/submission", async (req, res) => {
    try {
        res.status(200).send("CHEGOU AQUI CARAI")
    }catch (error) {
        res.status(400).send(error)
    }
})

export {router}