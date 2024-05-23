import { Router } from "express";

const routesMain = Router();

routesMain.get("/", (req, res) => {
    res.json({"main":"hola mundo"});
});

export default routesMain;