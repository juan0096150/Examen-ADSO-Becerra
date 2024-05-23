import { Router } from "express";
import { mensajeconsola } from "../messaging/brows";

const routesMain = Router();

routesMain.get("/", mensajeconsola);

export default routesMain;